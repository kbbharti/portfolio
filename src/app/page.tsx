import Link from 'next/link'

const heroLinks = [
  { label: 'AI Projects', href: '#ai-projects', external: false },
  { label: 'Experience', href: '#experience', external: false },
  { label: 'Skills', href: '/skills', external: false },
  { label: 'Education', href: '/education', external: false },
  { label: 'Get in touch', href: '/contact', external: false },
]

const aiProjects = [
  {
    title: 'RAG — Basic End-to-End',
    tagline: 'Retrieval-Augmented Generation · LangChain',
    summary: 'A minimal, local-first RAG stack: parse PDFs → chunk → embed → answer with grounded citations. FastAPI + LangChain backend with Postgres-backed memory and a clean Next.js chat UI.',
    bullets: [
      'Ingestion pipeline parses PDFs, splits them into overlapping chunks, embeds each chunk with a local Ollama embedding model, and stores the vectors in Postgres / PostgreSQL via the pgvector extension for fast vector search',
      'FastAPI + LangChain conversational RAG (Retrieval-Augmented Generation) retrieves the most relevant chunks per question and grounds every answer with page-level source citations (PDF name + page number)',
      'Runs fully local and private on Ollama (chat model + embeddings) against a single Postgres instance that holds both the vectors and the conversation memory',
      'Deployable end-to-end with Docker and Docker Compose for local dev, plus Kubernetes / GKE manifests (Deployment, Service, HPA) and a GitHub Actions CI/CD pipeline that builds images, pushes to Artifact Registry, and rolls out to the cluster',
    ],
    detailUrl: '/projects/rag-langchain',
    demoUrl: '/projects/rag-langchain/demo',
  },
  {
    title: 'Agentic RAG — LangGraph ReAct Agent',
    tagline: 'Multi-tool reasoning · LangGraph',
    summary: 'The advanced evolution of the basic RAG: a LangGraph ReAct agent that decides which tool to use per query — vector search, SQL, or custom Python functions — instead of always retrieving from one source.',
    bullets: [
      'A LangGraph ReAct agent reasons over each user query in Python and autonomously selects the right tool, rather than always retrieving from a single vector store — the core upgrade over the basic RAG',
      'Three tool types are wired in: semantic vector search over pgvector (PostgreSQL), a SQL toolkit over relational tables for exact counts and aggregations, and custom Python functions with descriptive docstrings',
      'Routing is driven by the tool descriptions — “how many / total / count” style questions go to SQL, conceptual questions to the vector database, and action-oriented requests to Python function tools',
      'Custom Python function tools can wrap backend API calls (FastAPI) or any external action, making the agent extensible to real business workflows well beyond document Q&A',
    ],
    detailUrl: '/projects/agentic-rag-langgraph',
    demoUrl: '/projects/agentic-rag-langgraph/demo',
  },
  {
    title: 'MLOps — End-to-End',
    tagline: 'Train → Serve → Scale · FastAPI + Kubernetes',
    summary: 'A compact end-to-end MLOps loop: train a small scikit-learn model, serve it behind FastAPI, test with Postman, and scale it on Kubernetes with deployment, service, and autoscaling.',
    bullets: [
      'Trains a small, lightweight scikit-learn model in Python end-to-end, kept deliberately simple to focus on the operational path from training to production',
      'Serves the trained model behind a FastAPI prediction endpoint, loading the model once at startup for low-latency inference',
      'API is validated with Postman by posting sample payloads and verifying the prediction responses before containerisation with Docker',
      'Ships production Kubernetes manifests — a Deployment for replicas and resources, a Service for stable networking, and a Horizontal Pod Autoscaler (HPA) that scales on CPU / load',
    ],
    detailUrl: '/projects/mlops-end-to-end',
    demoUrl: '',
  },
]

const experiences = [
  {
    company: 'COMPUTACENTER',
    role: 'Marketing Specialist & Strategic Communications',
    tenure: 'Jun 2025 – Present',
    summary: 'Executive communications, employer branding, and data-driven decks for a global enterprise IT organisation.',
    bullets: [
      'Architected a global Employer Value Proposition (EVP) framework — defining culture narratives, brand pillars, and messaging guidelines — now adopted as a consistent recruitment standard across regions',
      'Built executive communication decks that translate complex organisational data into clear leadership narratives for CEO visits, client engagements, and annual business reviews',
      'Led end-to-end communication planning and stakeholder management for enterprise leadership events, coordinating HR, Procurement, and Creative teams alongside external agency and vendor partners',
      'Partnered with client teams including Apple and Dell on campaign decks and storytelling frameworks, and own annual executive communication and content calendars',
    ],
  },
  {
    company: 'AMAZON',
    role: 'Program & Product Marketing Specialist',
    tenure: 'Oct 2022 – May 2025',
    summary: 'Data-driven go-to-market and growth experimentation across Amazon Seller Programs.',
    bullets: [
      'Led integrated go-to-market strategy for Amazon Seller Programs (SEP, SRP, Rewards, Launchpad, Karigar, Saheli) — positioning, messaging, and multi-channel plans driving 13–44% adoption and engagement growth',
      'Designed lifecycle campaigns across email, in-app, Seller Central, webinars, and WhatsApp that increased seller acquisition 21% and reactivated 11% of dormant sellers',
      'Built and ran a data-driven experimentation roadmap of 20+ growth experiments contributing to 41% overall program growth, including +44% Launchpad impressions and a +1,600 bps CTR improvement',
      'Built global seller-education playbooks for US, UK, and China markets and directed Amazon Sambhav execution across 8 exhibition booths',
    ],
  },
  {
    company: 'EARLY CAREER',
    role: 'Content, Campaigns & Digital Marketing',
    tenure: '2019 – 2022',
    summary: 'Shoppers Stop · Rananjay Exports · Amazon Fashion — content strategy, brand storytelling, and multi-channel campaigns.',
    bullets: [
      'Shoppers Stop — developed seasonal, loyalty, and fashion campaign content and multi-channel digital assets using customer and trend insights',
      'Rananjay Exports — delivered content strategy, brand storytelling, and UX writing for global D2C and B2B clients, mapping emotional user journeys to improve website experience',
      'Amazon Fashion — curated storefronts, PDPs, and campaign banners and executed on-site/digital marketing strategies, improving traffic and customer engagement',
    ],
  },
]

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="wrap">
          <div>
            <h1>Khushbu Bharti</h1>
            <div className="hero-sub">Aspiring AI / ML Engineer &nbsp;·&nbsp; 6+ yrs Marketing &amp; Growth &nbsp;·&nbsp; ex-Amazon &nbsp;·&nbsp; Bengaluru, India</div>
            <div className="hero-actions">
              {heroLinks.map((l) =>
                l.external ? (
                  <a key={l.label} className="pill-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                ) : (
                  <Link key={l.label} className="pill-link" href={l.href}>{l.label}</Link>
                )
              )}
            </div>
          </div>
          <svg className="wave" viewBox="0 0 1100 60" preserveAspectRatio="none"><path d="M0,30 C200,60 350,0 550,30 C750,60 900,0 1100,30 L1100,60 L0,60 Z" fill="#333333" opacity="0.06" /></svg>
        </div>
      </header>

      {/* AI PROJECTS */}
      <section id="ai-projects" className="ed-section" style={{ paddingTop: '48px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-row"><span className="sec-tag">AI Projects</span></div>
          </div>
          {aiProjects.map((p) => (
            <div className="exp-card" key={p.title}>
              <div className="exp-top">
                <div>
                  <div className="exp-company">{p.title}</div>
                  <div className="exp-role">{p.tagline}</div>
                </div>
              </div>
              <p className="exp-summary">{p.summary}</p>
              <ul className="exp-list">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '18px', alignItems: 'center' }}>
                {p.demoUrl ? (
                  <Link className="exp-more" href={p.demoUrl} style={{ display: 'inline' }}>Live demo ▶</Link>
                ) : null}
                <Link className="exp-more" href={p.detailUrl} style={{ display: 'inline' }}>Full details ↗</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="ed-section" style={{ paddingTop: '48px' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="sec-head-row"><span className="sec-tag">Experience</span></div>
          </div>
          {experiences.map((exp) => (
            <div className="exp-card" key={exp.company}>
              <div className="exp-top">
                <div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                </div>
                <span className="exp-tenure">{exp.tenure}</span>
              </div>
              <p className="exp-summary">{exp.summary}</p>
              <ul className="exp-list">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="ed-footer" style={{ background: 'var(--cream-deep)' }}>
        <div className="wrap">
          <div className="foot-fine">
            <span>© 2026 Khushbu Bharti</span>
            <span>Aspiring AI / ML Engineer · Bengaluru</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
