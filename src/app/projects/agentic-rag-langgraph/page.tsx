import Link from 'next/link'

const stack = ['Python', 'LangGraph', 'ReAct Agent', 'LangChain', 'FastAPI', 'PostgreSQL', 'pgvector', 'SQL Toolkit', 'Ollama', 'Docker Compose']

const tools = [
  {
    name: 'Vector Search',
    detail: 'Semantic retrieval over embedded documents in Postgres (pgvector) — used when the query needs meaning-based lookup rather than exact figures.',
  },
  {
    name: 'SQL Toolkit',
    detail: 'Runs queries against relational tables. The agent routes "how many / how much / count / total" style questions here for precise aggregations.',
  },
  {
    name: 'Custom Python Functions',
    detail: 'Hardcoded functions with clear docstrings/descriptions, each exposed as a tool. These can wrap backend API calls or any external action the agent may need.',
  },
]

const agentTools = [
  { label: 'Vector Search · pgvector', hex: '#7c3aed', bg: 'bg-[#f5f0ff]', border: 'border-[#e6dbff]', text: 'text-[#7c3aed]' },
  { label: 'SQL Toolkit · tables', hex: '#2563eb', bg: 'bg-[#eff4ff]', border: 'border-[#dbe4ff]', text: 'text-[#2563eb]' },
  { label: 'Python Functions · APIs', hex: '#059669', bg: 'bg-[#ecfdf5]', border: 'border-[#d1fae5]', text: 'text-[#059669]' },
]

export default function AgenticRagProject() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link href="/#ai-projects" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8">
        ← Back to portfolio
      </Link>

      <div className="mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent2)] tracking-[0.12em] uppercase mb-2">
          AI Project · 02
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] text-[var(--text)] leading-tight mb-2">
          Agentic RAG — LangGraph ReAct Agent
        </h1>
        <p className="text-[14px] text-[var(--muted)] mb-5">
          Multi-tool reasoning · LangGraph · Advanced evolution of the basic RAG
        </p>
        <Link href="/projects/agentic-rag-langgraph/demo" className="inline-flex items-center gap-2 text-[12px] font-medium text-[var(--bg)] bg-[var(--accent)] px-4 py-2 rounded-[8px] hover:opacity-90 transition-opacity">
          ▶ Try the live demo
        </Link>
      </div>

      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <p className="text-[14px] text-[var(--text-soft)] leading-[1.75]">
          The next step beyond the basic RAG. Instead of always retrieving from one vector store, a LangGraph ReAct agent reasons about each user query and decides which tool to call — vector search, SQL, or a custom Python function. It keeps the same backend foundation as the basic RAG, extended with relational tables and an agentic decision layer.
        </p>
      </div>

      {/* Architecture */}
      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-5">Architecture</h3>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* request path */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--bg)] text-[var(--text)] border-[var(--border)]">User</span>
            <span className="text-[var(--accent2)]" aria-hidden>→</span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--bg)] text-[var(--text)] border-[var(--border)]">FastAPI</span>
            <span className="text-[var(--accent2)]" aria-hidden>→</span>
            <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]">LangGraph ReAct Agent</span>
          </div>
          <span className="text-[var(--accent2)] hidden lg:inline" aria-hidden>⇄</span>
          <span className="text-[var(--accent2)] lg:hidden" aria-hidden>↓</span>
          {/* tools */}
          <div className="flex flex-col gap-2 items-start">
            {agentTools.map((t) => (
              <span key={t.label} className={`font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border ${t.bg} ${t.border} ${t.text} inline-flex items-center gap-2`}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.hex }} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]">Agent</span>
          <span className="text-[var(--accent2)]" aria-hidden>→</span>
          <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--bg)] text-[var(--text)] border-[var(--border)]">Grounded answer</span>
        </div>
        <p className="text-[12px] text-[var(--muted)] leading-[1.6] mt-4">
          The agent observes each tool&apos;s result and loops until it can answer — choosing the tool from the query intent, not a hardcoded rule.
        </p>
      </div>

      {/* Tools */}
      <div className="space-y-6">
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-4">The agent&apos;s toolbox</h3>
          <div className="space-y-4">
            {tools.map((t) => (
              <div key={t.name}>
                <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">{t.name}</h4>
                <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Routing */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">How the agent decides</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            Each tool ships with a clear description, so the ReAct agent can match intent to capability. A question like &ldquo;how many orders were placed last month?&rdquo; is routed to the SQL toolkit for an exact count; a conceptual question is answered from the vector database; and an action that needs external data is handed to a custom Python function. The agent chooses autonomously at run time — no hardcoded routing.
          </p>
        </div>

        {/* Foundation */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Built on the RAG foundation</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            Reuses the local-first backend from the basic RAG project — FastAPI, Postgres with pgvector, and local Ollama models — and adds SQL tables plus the LangGraph agent layer on top, keeping the same Docker Compose and deployment approach.
          </p>
        </div>

        {/* Example routing */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-4">Example queries &amp; routing</h3>
          <div className="space-y-3">
            {[
              { q: '“How many orders were placed last month?”', tool: 'SQL Toolkit', why: 'needs an exact count / aggregation' },
              { q: '“What does the return policy say about damaged items?”', tool: 'Vector Search', why: 'semantic lookup over documents' },
              { q: '“Check the live shipping status for order #4821”', tool: 'Python Function', why: 'calls an external backend API' },
              { q: '“Summarise the top complaints and how many raised each”', tool: 'SQL + Vector', why: 'combines counts with semantic context' },
            ].map((row) => (
              <div key={row.q} className="border border-[var(--border)] rounded-[8px] p-3">
                <p className="text-[13px] text-[var(--text)] mb-1.5">{row.q}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] px-2 py-0.5 rounded bg-[var(--green-bg)] border border-[var(--green-border)] text-[var(--green-text)]">{row.tool}</span>
                  <span className="text-[11px] text-[var(--muted)]">{row.why}</span>
                </div>
              </div>
            ))}
          </div>
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
