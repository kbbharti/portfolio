import Link from 'next/link'

const stack = ['Python', 'LangChain', 'FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker Compose', 'GKE', 'GitHub Actions']

const pipeline = [
  { step: 'Ingestion', detail: 'Parse PDFs → chunk → embed → store in Postgres via the pgvector extension.' },
  { step: 'Backend', detail: 'FastAPI + LangChain conversational RAG with Postgres-backed chat memory (/chat, /health).' },
  { step: 'Frontend', detail: 'Clean Next.js, ChatGPT-style chat UI with streamed answers and cited sources.' },
  { step: 'Deployment', detail: 'Docker Compose for local; GKE manifests (deployment, service, HPA) + GitHub Actions for cloud.' },
]

type Node = { label: string; accent?: boolean }

function Flow({ nodes }: { nodes: Node[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {nodes.map((n, i) => (
        <div key={n.label} className="flex items-center gap-2">
          <span
            className={`font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 whitespace-nowrap border ${
              n.accent ? 'bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]' : 'bg-[var(--bg)] text-[var(--text)] border-[var(--border)]'
            }`}
          >
            {n.label}
          </span>
          {i < nodes.length - 1 && <span className="text-[var(--accent2)]" aria-hidden>→</span>}
        </div>
      ))}
    </div>
  )
}

export default function RagLangChainProject() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link href="/#ai-projects" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8">
        ← Back to portfolio
      </Link>

      <div className="mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent2)] tracking-[0.12em] uppercase mb-2">
          AI Project · 01
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] text-[var(--text)] leading-tight mb-2">
          RAG — Basic End-to-End
        </h1>
        <p className="text-[14px] text-[var(--muted)] mb-5">
          Retrieval-Augmented Generation · LangChain · Local-first
        </p>
        <Link href="/projects/rag-langchain/demo" className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--bg)] bg-[var(--accent)] px-4 py-2 rounded-[8px] hover:opacity-90 transition-opacity">
          ▶ Try the live demo
        </Link>
      </div>

      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <p className="text-[14px] text-[var(--text-soft)] leading-[1.75]">
          A minimal, local-first Retrieval-Augmented Generation stack. Everything runs against a local Ollama (LLM + embeddings) and a single Postgres instance holding both vectors and chat memory via the pgvector extension — so answers stay grounded in your own documents with page-level source citations.
        </p>
      </div>

      {/* Architecture */}
      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-5">Architecture</h3>
        <div className="space-y-5">
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Ingestion · offline</div>
            <Flow nodes={[{ label: 'PDFs' }, { label: 'Chunk' }, { label: 'Embed · Ollama' }, { label: 'pgvector · Postgres', accent: true }]} />
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Query · online</div>
            <Flow
              nodes={[
                { label: 'User' },
                { label: 'FastAPI · LangChain', accent: true },
                { label: 'Retrieve top-k' },
                { label: 'Ollama LLM' },
                { label: 'Answer + citations' },
              ]}
            />
          </div>
          <p className="text-[12px] text-[var(--muted)] leading-[1.6]">
            A single Postgres instance holds both the vector index (pgvector) and the conversation memory, so retrieval and chat history share one store.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-6">
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-4">How it works</h3>
          <div className="space-y-4">
            {pipeline.map((p) => (
              <div key={p.step}>
                <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">{p.step}</h4>
                <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grounding & memory */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Grounding & memory</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            Each answer cites the grounding source (PDF name + page). Follow-up questions use Postgres-backed conversation memory, while off-topic or out-of-corpus questions are answered without fabricated citations. New chats start a fresh session; history persists in the sidebar.
          </p>
        </div>

        {/* Deployment */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Deployment</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            The frontend and backend are containerised and deployed to GKE (Postgres / vector DB managed separately). GitHub Actions builds both images, pushes to Artifact Registry, and rolls out Deployments, Services (LoadBalancer), and HorizontalPodAutoscalers. Local runs use a single Docker Compose bringing up Postgres, backend, and frontend together.
          </p>
        </div>

        {/* Repository layout */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Repository layout</h3>
          <div className="space-y-2">
            {[
              { path: 'configs/config.yaml', note: 'models, chunking, retriever, and system prompt' },
              { path: 'common/', note: 'shared config + LangChain factories' },
              { path: 'ingestion/', note: 'PDF → pgvector ingestion pipeline' },
              { path: 'backend/', note: 'FastAPI app exposing /chat and /health' },
              { path: 'frontend/', note: 'Next.js chat UI' },
              { path: 'deploy/', note: 'GKE deployment / service / hpa for frontend + backend' },
              { path: '.github/workflows/', note: 'build + deploy to GKE' },
              { path: 'docker-compose.yaml', note: 'postgres + backend + frontend' },
            ].map((row) => (
              <div key={row.path} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <code className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent)] shrink-0 min-w-[180px]">{row.path}</code>
                <span className="text-[12px] text-[var(--muted)] leading-[1.6]">{row.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* UI testing checklist */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">UI testing checklist</h3>
          <ul className="space-y-2 list-disc pl-5">
            {[
              'A new chat starts a fresh session; prior conversations persist in the left sidebar',
              'Questions grounded in ingested PDFs return a Sources row (e.g. 2312.10997v5.pdf p.0, 1)',
              'Follow-up questions correctly reuse the Postgres-backed conversation memory',
              'Off-topic / out-of-corpus questions are answered without fabricating citations',
            ].map((item) => (
              <li key={item} className="text-[13px] text-[var(--text-soft)] leading-[1.7]">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-8 pt-6 border-t border-[var(--border)]">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent2)] mb-3">Tech Stack</div>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((t) => (
            <span key={t} className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green-text)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
