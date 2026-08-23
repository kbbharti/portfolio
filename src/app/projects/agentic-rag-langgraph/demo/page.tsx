'use client';

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';

type Tool = 'Vector Search' | 'SQL Toolkit' | 'Python Function';

type Scenario = {
  label: string;
  question: string;
  tool: Tool;
  thought: string;
  action: string;
  observation: string;
  answer: string;
};

const TOOL_STYLE: Record<Tool, { text: string; bg: string; border: string; dot: string; icon: string; hex: string }> = {
  'Vector Search': { text: 'text-[#7c3aed]', bg: 'bg-[#f5f0ff]', border: 'border-[#e6dbff]', dot: 'bg-[#7c3aed]', icon: '◈', hex: '#7c3aed' },
  'SQL Toolkit': { text: 'text-[#2563eb]', bg: 'bg-[#eff4ff]', border: 'border-[#dbe4ff]', dot: 'bg-[#2563eb]', icon: '▤', hex: '#2563eb' },
  'Python Function': { text: 'text-[#059669]', bg: 'bg-[#ecfdf5]', border: 'border-[#d1fae5]', dot: 'bg-[#059669]', icon: 'ƒ', hex: '#059669' },
};

const TOOL_DESC: Record<Tool, string> = {
  'Vector Search': 'semantic lookup over pgvector',
  'SQL Toolkit': 'exact counts & aggregations',
  'Python Function': 'calls external backend APIs',
};

const SCENARIOS: Scenario[] = [
  {
    label: 'How many orders were placed last month?',
    question: 'How many orders were placed last month?',
    tool: 'SQL Toolkit',
    thought: 'This asks for an exact count over structured data, so a semantic lookup won’t do. I should query the orders table.',
    action: "sql_db_query(\n  \"SELECT COUNT(*) FROM orders\n   WHERE order_date >= date('now','-1 month')\"\n)",
    observation: '{ "count": 1284 }',
    answer:
      'There were 1,284 orders placed last month. Because this is a precise aggregation over the orders table, the agent routed it to the SQL toolkit rather than the vector store — exact counts should come from the database, not from retrieved text.',
  },
  {
    label: 'What does the return policy say about damaged items?',
    question: 'What does the return policy say about damaged items?',
    tool: 'Vector Search',
    thought: 'This is a conceptual question about policy wording. The answer lives in unstructured documents, so I should search the vector store.',
    action: 'vector_search(\n  query="return policy damaged items",\n  k=3\n)',
    observation: '→ policy.pdf p.4  (score 0.90)\n  "Damaged items may be returned within\n   30 days for a full refund…"',
    answer:
      'Damaged items can be returned within 30 days of delivery for a full refund or replacement, provided photos of the damage are submitted with the request. The agent chose vector search here because the answer is semantic and lives in the policy documents rather than a table.',
  },
  {
    label: 'Check the live shipping status for order #4821',
    question: 'Check the live shipping status for order #4821',
    tool: 'Python Function',
    thought: 'This needs real-time data from an external system, not stored documents or tables. I should call the shipping-status tool.',
    action: 'get_shipping_status(\n  order_id="4821"\n)',
    observation: '{\n  "order": "4821",\n  "status": "In transit",\n  "eta": "2 days",\n  "carrier": "BlueDart"\n}',
    answer:
      'Order #4821 is currently in transit with BlueDart and is expected to arrive in about 2 days. The agent used a custom Python function tool that wraps the shipping backend API — the kind of live action that neither the vector store nor SQL can answer.',
  },
  {
    label: 'Summarise the top complaints and how many raised each',
    question: 'Summarise the top complaints and how many customers raised each',
    tool: 'SQL Toolkit',
    thought: 'This blends counting with meaning. I’ll aggregate complaint categories in SQL, then phrase the summary from the grouped counts.',
    action: "sql_db_query(\n  \"SELECT category, COUNT(*) c FROM tickets\n   GROUP BY category ORDER BY c DESC LIMIT 3\"\n)",
    observation: '[\n  {"category":"Late delivery","c":312},\n  {"category":"Damaged item","c":205},\n  {"category":"Wrong item","c":141}\n]',
    answer:
      'The top three complaint categories are late delivery (312 tickets), damaged items (205), and wrong item shipped (141). The agent grouped and counted the tickets in SQL, then summarised the result — combining exact numbers with a readable explanation.',
  },
];

type StepKind = 'thought' | 'action' | 'observation';
type Step = { kind: StepKind; text: string };

const STEP_META: Record<StepKind, { label: string; icon: string; mono: boolean }> = {
  thought: { label: 'Thought', icon: '💭', mono: false },
  action: { label: 'Action · tool call', icon: '⚡', mono: true },
  observation: { label: 'Observation', icon: '↳', mono: true },
};

function SparkIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  );
}

export default function AgenticDemoPage() {
  const [active, setActive] = useState<Scenario | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [answer, setAnswer] = useState('');
  const [phase, setPhase] = useState<'idle' | 'reasoning' | 'streaming' | 'done'>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  const streamAnswer = useCallback((full: string) => {
    setPhase('streaming');
    const words = full.split(' ');
    let i = 0;
    const tick = () => {
      if (i >= words.length) {
        setPhase('done');
        return;
      }
      const size = Math.random() > 0.7 ? 3 : Math.random() > 0.4 ? 2 : 1;
      const chunk = words.slice(i, i + size).join(' ');
      i += size;
      setAnswer((prev) => (prev ? `${prev} ${chunk}` : chunk));
      timers.current.push(setTimeout(tick, Math.random() > 0.85 ? 70 : 30));
    };
    timers.current.push(setTimeout(tick, 250));
  }, []);

  const run = useCallback(
    (sc: Scenario) => {
      if (phase === 'reasoning' || phase === 'streaming') return;
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setActive(sc);
      setSteps([]);
      setAnswer('');
      setPhase('reasoning');

      const sequence: Step[] = [
        { kind: 'thought', text: sc.thought },
        { kind: 'action', text: sc.action },
        { kind: 'observation', text: sc.observation },
      ];
      sequence.forEach((step, idx) => {
        timers.current.push(
          setTimeout(() => {
            setSteps((s) => [...s, step]);
            if (idx === sequence.length - 1) {
              timers.current.push(setTimeout(() => streamAnswer(sc.answer), 600));
            }
          }, 750 * (idx + 1))
        );
      });
    },
    [phase, streamAnswer]
  );

  const busy = phase === 'reasoning' || phase === 'streaming';

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-14">
      <div className="max-w-[820px] mx-auto">
        <Link
          href="/projects/agentic-rag-langgraph"
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-6"
        >
          ← Back to project
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[#4f46e5] bg-[#eef0ff] border border-[#e0e2ff] px-2.5 py-1 rounded-full mb-3">
            <SparkIcon />
            Demo — Agentic RAG
          </div>
          <h1 className="text-[27px] font-[family-name:var(--font-display)] text-[var(--text)] mb-2">Watch the agent choose a tool</h1>
          <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[620px]">
            Pick a question and watch the LangGraph ReAct agent reason, select the right tool, execute it, and stream a grounded answer. The tool is chosen from the query intent — not hardcoded.
          </p>
        </div>

        {/* Tool legend */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(Object.keys(TOOL_STYLE) as Tool[]).map((t) => (
            <div key={t} className={`inline-flex items-center gap-2 ${TOOL_STYLE[t].bg} border ${TOOL_STYLE[t].border} px-3 py-1.5 rounded-lg`}>
              <span className={`font-[family-name:var(--font-mono)] text-[12px] ${TOOL_STYLE[t].text}`}>{TOOL_STYLE[t].icon}</span>
              <span className={`font-[family-name:var(--font-mono)] text-[11px] font-medium ${TOOL_STYLE[t].text}`}>{t}</span>
              <span className="text-[10px] text-[var(--muted)] hidden sm:inline">· {TOOL_DESC[t]}</span>
            </div>
          ))}
        </div>

        {/* Scenario picker */}
        <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
          {SCENARIOS.map((sc) => {
            const st = TOOL_STYLE[sc.tool];
            const selected = active?.label === sc.label;
            return (
              <button
                key={sc.label}
                onClick={() => run(sc)}
                disabled={busy}
                className={`group text-left bg-[var(--bg2)] border border-[var(--border)] border-l-[3px] rounded-[10px] p-3.5 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] ${
                  selected ? 'ring-1 ring-[var(--border)]' : ''
                }`}
                style={{ borderLeftColor: st.hex }}
              >
                <div className="text-[13px] text-[var(--text)] mb-2 leading-[1.5]">{sc.label}</div>
                <span className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded ${st.bg} border ${st.border} ${st.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                  {sc.tool}
                </span>
              </button>
            );
          })}
        </div>

        {/* Trace */}
        {active ? (
          <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[14px] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--border)] bg-[var(--bg)]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center text-white">
                <SparkIcon />
              </div>
              <span className="font-[family-name:var(--font-mono)] text-[11px] font-medium text-[var(--text)]">LangGraph ReAct Agent</span>
              <span className={`ml-auto inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded ${TOOL_STYLE[active.tool].bg} border ${TOOL_STYLE[active.tool].border} ${TOOL_STYLE[active.tool].text}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${TOOL_STYLE[active.tool].dot}`} />
                {active.tool}
              </span>
            </div>

            <div className="p-5">
              <div className="mb-4 flex gap-2.5">
                <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.1em] text-[var(--muted)] mt-1 w-[70px] shrink-0">User</span>
                <div className="text-[13px] text-[var(--text)] bg-[var(--bg)] border border-[var(--border)] rounded-[10px] px-3.5 py-2.5 flex-1">{active.question}</div>
              </div>

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const meta = STEP_META[step.kind];
                  return (
                    <div key={idx} className="flex gap-2.5 animate-[fadeIn_0.3s_ease]">
                      <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.08em] text-[var(--muted)] mt-1.5 w-[70px] shrink-0 inline-flex items-center gap-1">
                        <span className="not-italic">{meta.icon}</span>
                        {meta.label.split(' ')[0]}
                      </span>
                      <div className="flex-1 min-w-0">
                        {step.kind === 'action' && (
                          <div className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.08em] text-[var(--muted)] mb-1">{meta.label}</div>
                        )}
                        {meta.mono ? (
                          <pre className={`font-[family-name:var(--font-mono)] text-[11px] leading-[1.6] whitespace-pre-wrap break-words rounded-[8px] px-3 py-2.5 border ${
                            step.kind === 'action'
                              ? `${TOOL_STYLE[active.tool].bg} ${TOOL_STYLE[active.tool].border} ${TOOL_STYLE[active.tool].text}`
                              : 'bg-[#0f172a] border-[#1e293b] text-[#e2e8f0]'
                          }`}>{step.text}</pre>
                        ) : (
                          <p className="text-[12px] text-[var(--text-soft)] leading-[1.7] bg-[var(--bg)] border border-[var(--border)] rounded-[8px] px-3 py-2.5">{step.text}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                {phase === 'reasoning' && (
                  <div className="flex items-center gap-2 pl-[80px]">
                    <span className="flex gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-bounce [animation-delay:-0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-bounce [animation-delay:-0.1s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] animate-bounce" />
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">Reasoning…</span>
                  </div>
                )}
              </div>

              {(answer || phase === 'streaming' || phase === 'done') && (
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex gap-2.5">
                  <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.08em] text-[#4f46e5] mt-1.5 w-[70px] shrink-0 inline-flex items-center gap-1">✓ Answer</span>
                  <p className="flex-1 text-[13px] text-[var(--text)] leading-[1.8]">
                    {answer}
                    {phase === 'streaming' && <span className="inline-block w-[2px] h-[13px] bg-[#4f46e5] ml-0.5 animate-pulse align-middle" />}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-[var(--bg2)] border border-dashed border-[var(--border)] rounded-[14px] p-10 text-center">
            <div className="w-11 h-11 mx-auto rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] flex items-center justify-center text-white mb-3">
              <SparkIcon />
            </div>
            <div className="text-[13px] text-[var(--text)] mb-1">Select a question above to run the agent</div>
            <div className="text-[11px] text-[var(--muted)]">Each one routes to a different tool</div>
          </div>
        )}

        <p className="mt-4 font-[family-name:var(--font-mono)] text-[10px] text-[var(--muted)] opacity-70">
          Illustrative demo — traces are pre-authored to mirror the ReAct tool-selection behaviour of the live agent.
        </p>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }`}</style>
    </main>
  );
}
