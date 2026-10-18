'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';

type Chunk = { doc: string; page: string; snippet: string; score: number };
type Msg = { role: 'user' | 'assistant'; content: string; chunks?: Chunk[]; done?: boolean };

const KB: Record<string, { answer: string; chunks: Chunk[] }> = {
  'what is rag': {
    answer:
      'Retrieval-Augmented Generation (RAG) grounds a language model in your own documents instead of relying only on what it memorised during training. At query time the system retrieves the most relevant chunks from a Databricks-managed vector index and passes them to the model as context, so answers stay accurate, up to date, and traceable back to a source. In this project, PDFs are chunked, embedded with a Databricks-hosted embedding model, and stored in Databricks Vector Search, with every answer citing the exact document and page it came from.',
    chunks: [
      { doc: '2312.10997v5.pdf', page: 'p.1', score: 0.91, snippet: 'RAG combines a retriever over an external corpus with a generator, grounding responses in retrieved evidence…' },
      { doc: '2312.10997v5.pdf', page: 'p.3', score: 0.86, snippet: 'At inference the query is embedded, the nearest chunks are fetched, and passed as context to the LLM…' },
    ],
  },
  chunking: {
    answer:
      'Documents are split into overlapping chunks before embedding. Overlap preserves context that would otherwise be cut off at a boundary, which improves retrieval quality for questions whose answer spans two sections. Chunk size and overlap are configurable in configs/config.yaml, so you can tune the trade-off between retrieval precision and the amount of context passed to the model.',
    chunks: [
      { doc: 'ingestion-guide.pdf', page: 'p.2', score: 0.88, snippet: 'Text is split into overlapping windows so a fact near a boundary appears in two adjacent chunks…' },
      { doc: '2312.10997v5.pdf', page: 'p.4', score: 0.79, snippet: 'Chunk size trades retrieval precision against the amount of context supplied to the generator…' },
    ],
  },
  embeddings: {
    answer:
      'Each chunk is turned into a dense vector using an embedding model served through Databricks. Those vectors are indexed in Databricks Vector Search, which lets the backend run fast similarity search to find the chunks closest in meaning to the user question — without needing a self-hosted model-serving and vector store setup.',
    chunks: [
      { doc: 'ingestion-guide.pdf', page: 'p.1', score: 0.9, snippet: 'The Databricks embedding model produces dense vectors that are indexed in Databricks Vector Search for fast semantic retrieval…' },
      { doc: 'architecture.pdf', page: 'p.2', score: 0.83, snippet: 'Similarity search runs against the Databricks vector index, so the backend can fetch nearest chunks without a self-hosted vector database…' },
    ],
  },
  memory: {
    answer:
      'Conversation memory is stored in the same Postgres instance as the vectors. Each chat has a session_id, and prior turns are loaded back into the prompt so follow-up questions resolve correctly (e.g. "and what about the second one?"). Starting a new chat creates a fresh session while previous conversations remain in the sidebar history.',
    chunks: [
      { doc: 'backend-notes.pdf', page: 'p.3', score: 0.87, snippet: 'Chat history is keyed by session_id and replayed into the prompt to resolve follow-up references…' },
    ],
  },
  deploy: {
    answer:
      'Locally, a single docker compose up --build brings up Postgres, the FastAPI backend, and the Next.js frontend together. For the cloud, only the frontend and backend are deployed to GKE — GitHub Actions builds both images, pushes them to Artifact Registry, and rolls out Deployment, Service (LoadBalancer), and HorizontalPodAutoscaler resources from the deploy/ manifests.',
    chunks: [
      { doc: 'deploy-runbook.pdf', page: 'p.1', score: 0.89, snippet: 'docker compose up --build starts postgres, backend and frontend for local development…' },
      { doc: 'deploy-runbook.pdf', page: 'p.2', score: 0.82, snippet: 'GitHub Actions builds images, pushes to Artifact Registry, and applies the GKE manifests…' },
    ],
  },
};

const OUT_OF_CORPUS =
  "I couldn't find anything about that in the ingested documents, so I won't guess. Try asking about how RAG works, chunking, embeddings, conversation memory, or deployment — those topics are covered in the corpus.";

const SUGGESTIONS = [
  'What is RAG?',
  'How does chunking work?',
  'How are embeddings stored?',
  'How is chat memory handled?',
  'How is it deployed?',
];

const META = [
  { label: 'Databricks LLM', hint: 'chat model' },
  { label: 'Databricks embeddings', hint: 'vector index' },
  { label: '5 docs · 128 chunks', hint: 'corpus' },
];

function matchKb(q: string) {
  const t = q.toLowerCase();
  if (/(what|explain|about).*rag|^rag|retrieval/.test(t)) return KB['what is rag'];
  if (/chunk|split|overlap/.test(t)) return KB['chunking'];
  if (/embed|vector|similarity/.test(t)) return KB['embeddings'];
  if (/memory|history|session|follow/.test(t)) return KB['memory'];
  if (/deploy|docker|kubernetes|gke|ci|cd|compose/.test(t)) return KB['deploy'];
  return null;
}

function SparkIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  );
}

export default function RagDemoPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [phase, setPhase] = useState<'idle' | 'retrieving' | 'streaming'>('idle');
  const [pendingChunks, setPendingChunks] = useState<Chunk[] | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<Record<number, 'up' | 'down'>>({});
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, phase, pendingChunks]);

  const streamAnswer = useCallback((answer: string, chunks?: Chunk[]) => {
    setMessages((m) => [...m, { role: 'assistant', content: '', chunks }]);
    const words = answer.split(' ');
    let i = 0;
    const tick = () => {
      if (i >= words.length) {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { ...copy[copy.length - 1], done: true };
          return copy;
        });
        setPhase('idle');
        return;
      }
      const size = Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1;
      const chunk = words.slice(i, i + size).join(' ');
      i += size;
      setMessages((m) => {
        const copy = [...m];
        const last = copy[copy.length - 1];
        copy[copy.length - 1] = { ...last, content: last.content ? `${last.content} ${chunk}` : chunk };
        return copy;
      });
      timers.current.push(setTimeout(tick, Math.random() > 0.85 ? 70 : 30));
    };
    timers.current.push(setTimeout(tick, 250));
  }, []);

  const send = useCallback(
    (raw?: string) => {
      const q = (raw ?? input).trim();
      if (!q || phase !== 'idle') return;
      setInput('');
      setMessages((m) => [...m, { role: 'user', content: q }]);
      setPhase('retrieving');
      setPendingChunks(null);
      const hit = matchKb(q);
      // reveal retrieved chunks mid-way through the retrieval phase
      if (hit) timers.current.push(setTimeout(() => setPendingChunks(hit.chunks), 550));
      timers.current.push(
        setTimeout(() => {
          setPendingChunks(null);
          setPhase('streaming');
          if (hit) streamAnswer(hit.answer, hit.chunks);
          else streamAnswer(OUT_OF_CORPUS);
        }, 1150)
      );
    },
    [input, phase, streamAnswer]
  );

  const reset = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setMessages([]);
    setPhase('idle');
    setPendingChunks(null);
    setFeedback({});
    setCopied(null);
  };

  const copy = (idx: number, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(idx);
    timers.current.push(setTimeout(() => setCopied((c) => (c === idx ? null : c)), 1500));
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-14">
      <div className="max-w-[760px] mx-auto">
        <Link
          href="/projects/rag-langchain"
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-6"
        >
          ← Back to project
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[#4f46e5] bg-[#eef0ff] border border-[#e0e2ff] px-2.5 py-1 rounded-full mb-3">
            <SparkIcon />
            Demo — RAG Chat
          </div>
          <h1 className="text-[27px] font-[family-name:var(--font-display)] text-[var(--text)] mb-2">Ask the documents</h1>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[600px]">
            A ChatGPT-style RAG chat. Each question runs a similarity search over Databricks Vector Search, the retrieved chunks are shown, then a grounded answer streams in with the exact document and page it came from. Out-of-corpus questions are declined instead of hallucinated.
          </p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {META.map((m) => (
              <span key={m.label} className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] text-[var(--text-soft)] bg-[var(--bg2)] border border-[var(--border)] px-2.5 py-1 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                {m.label}
                <span className="text-[var(--muted)] opacity-70">· {m.hint}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Chat window */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)] bg-[var(--bg)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)]">rag-chat · session #a1b2</span>
            {messages.length > 0 && (
              <button onClick={reset} className="ml-auto font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                ↺ New chat
              </button>
            )}
          </div>

          <div ref={scrollRef} className="p-5 h-[420px] overflow-y-auto">
            {messages.length === 0 && phase === 'idle' && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center mb-3 text-white">
                  <SparkIcon className="scale-150" />
                </div>
                <div className="text-[13px] text-[var(--text)] mb-1">Ask a question about the RAG project</div>
                <div className="text-[11px] text-[var(--muted)]">Answers are grounded in the ingested documents</div>
              </div>
            )}

            <div className="space-y-4">
              {messages.map((msg, idx) =>
                msg.role === 'user' ? (
                  <div key={idx} className="flex justify-end">
                    <div className="max-w-[80%] bg-[var(--accent)] text-[var(--bg)] text-[13px] leading-[1.7] px-4 py-2.5 rounded-[14px] rounded-br-[4px]">
                      {msg.content}
                    </div>
                  </div>
                ) : (
                  <div key={idx} className="flex gap-2.5">
                    <div className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center text-white mt-0.5">
                      <SparkIcon />
                    </div>
                    <div className="flex-1 min-w-0">
                      {msg.chunks && msg.chunks.length > 0 && (
                        <details className="mb-2.5 group" open>
                          <summary className="cursor-pointer list-none font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em] text-[#4f46e5] mb-1.5 inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                            Retrieved {msg.chunks.length} chunks
                          </summary>
                          <div className="space-y-1.5 mt-1.5">
                            {msg.chunks.map((c, ci) => (
                              <div key={ci} className="bg-[var(--bg)] border border-[var(--border)] rounded-[8px] px-3 py-2">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#0e7490] bg-[#ecfeff] border border-[#cff2f6] px-1.5 py-0.5 rounded">{c.doc} {c.page}</span>
                                  <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--muted)] ml-auto">score {c.score.toFixed(2)}</span>
                                </div>
                                <p className="text-[11px] text-[var(--muted)] leading-[1.55]">{c.snippet}</p>
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                      <div className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] text-[13px] leading-[1.8] px-4 py-3 rounded-[14px] rounded-tl-[4px]">
                        <span>{msg.content}</span>
                        {phase === 'streaming' && idx === messages.length - 1 && (
                          <span className="inline-block w-[2px] h-[13px] bg-[#4f46e5] ml-0.5 animate-pulse align-middle" />
                        )}
                      </div>
                      {msg.done && (
                        <div className="flex items-center gap-3 mt-2 pl-1">
                          <button onClick={() => copy(idx, msg.content)} className="font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            {copied === idx ? '✓ Copied' : '⧉ Copy'}
                          </button>
                          <span className="text-[var(--border)]">·</span>
                          {feedback[idx] ? (
                            <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#0e7490]">Thanks for the feedback</span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <button onClick={() => setFeedback((f) => ({ ...f, [idx]: 'up' }))} aria-label="Helpful" className="text-[var(--muted)] hover:text-[#059669] transition-colors text-[12px]">👍</button>
                              <button onClick={() => setFeedback((f) => ({ ...f, [idx]: 'down' }))} aria-label="Not helpful" className="text-[var(--muted)] hover:text-[#dc2626] transition-colors text-[12px]">👎</button>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              )}

              {phase === 'retrieving' && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center text-white mt-0.5">
                    <SparkIcon />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.08em] text-[#4f46e5] mb-2">
                      <span className="flex gap-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-bounce [animation-delay:-0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-bounce [animation-delay:-0.1s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-bounce" />
                      </span>
                      Searching Databricks Vector Search — top-k similarity
                    </div>
                    {pendingChunks ? (
                      <div className="space-y-1.5">
                        {pendingChunks.map((c, ci) => (
                          <div key={ci} className="bg-[var(--bg)] border border-[var(--border)] rounded-[8px] px-3 py-2 animate-[fadeIn_0.3s_ease]">
                            <span className="font-[family-name:var(--font-mono)] text-[9px] text-[#0e7490] bg-[#ecfeff] border border-[#cff2f6] px-1.5 py-0.5 rounded">{c.doc} {c.page}</span>
                            <span className="font-[family-name:var(--font-mono)] text-[9px] text-[var(--muted)] ml-2">score {c.score.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2 max-w-[360px]">
                        <div className="h-2 rounded bg-[var(--border)] animate-pulse w-[90%]" />
                        <div className="h-2 rounded bg-[var(--border)] animate-pulse w-[70%]" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Suggestions + input */}
          <div className="border-t border-[var(--border)] p-3 bg-[var(--bg)]">
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  disabled={phase !== 'idle'}
                  className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] px-2.5 py-1.5 rounded-full bg-[var(--bg2)] border border-[var(--border)] text-[var(--muted)] hover:text-[#4f46e5] hover:border-[#c7cbff] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="text-[#4f46e5]">↗</span>
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] overflow-hidden focus-within:border-[#4f46e5] transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Ask about the RAG project…"
                className="w-full bg-transparent text-[13px] text-[var(--text)] placeholder:text-[var(--muted)] px-3.5 py-3 outline-none"
              />
              <button
                onClick={() => send()}
                disabled={phase !== 'idle' || !input.trim()}
                aria-label="Send"
                className="m-1.5 w-9 h-9 shrink-0 rounded-[8px] bg-[#4f46e5] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] opacity-70">
          Illustrative demo — responses are pre-authored to mirror the grounded, cited behaviour of the live app.
        </p>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }`}</style>
    </main>
  );
}
