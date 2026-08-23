import Link from 'next/link'

const skills = [
  { label: 'AI / ML', values: 'Python, LangChain, LangGraph, RAG, ReAct Agents, FastAPI, scikit-learn' },
  { label: 'MLOps', values: 'Docker, Docker Compose, Kubernetes, GKE, GitHub Actions, HPA autoscaling' },
  { label: 'Data', values: 'PostgreSQL, pgvector, SQL, Ollama embeddings, vector search' },
  { label: 'Marketing & Strategy', values: 'GTM Strategy, Employer Branding (EVP), Growth Experimentation, Lifecycle Marketing, Stakeholder Management' },
  { label: 'Tools', values: 'HubSpot, Tableau, Power BI, Google Analytics, Postman' },
]

const certifications = [
  'Generative AI Marketing Professional — American Marketing Association',
  'Inbound Marketing — HubSpot',
  'Google Analytics — Google',
  'Product Management — Aha! / LinkedIn Learning',
  'Marketing Automation — Simplilearn',
]

export default function SkillsPage() {
  return (
    <main className="ed-section" style={{ paddingTop: '40px' }}>
      <div className="wrap">
        <Link
          href="/"
          className="mono"
          style={{ display: 'inline-block', fontSize: '12px', color: 'var(--ink-soft)', textDecoration: 'none', marginBottom: '28px' }}
        >
          ← Back to home
        </Link>

        <div className="sec-head">
          <div className="sec-head-row"><span className="sec-tag">Skills &amp; Tooling</span></div>
          <h2>What I build with.</h2>
        </div>
        <p className="sec-sub">AI / ML engineering foundations, backed by six years of marketing &amp; growth strategy.</p>

        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-row" key={s.label}>
              <div className="skill-label">{s.label}</div>
              <div className="skill-values">{s.values}</div>
            </div>
          ))}
        </div>

        <div className="sec-head" style={{ marginTop: '48px' }}>
          <div className="sec-head-row"><span className="sec-tag">Certifications</span></div>
        </div>
        <div className="skills-grid">
          {certifications.map((c) => (
            <div className="skill-row" key={c}>
              <div className="skill-values">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
