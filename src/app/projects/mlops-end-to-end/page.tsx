import Link from 'next/link'

const stack = ['Python', 'scikit-learn', 'FastAPI', 'Postman', 'Docker', 'Kubernetes', 'Deployment', 'Service', 'HPA']

const steps = [
  {
    name: 'Train',
    detail: 'Train a small, lightweight model (e.g. a scikit-learn classifier) — kept intentionally simple to focus on the operational path from model to production.',
  },
  {
    name: 'Serve',
    detail: 'Wrap the trained model in a FastAPI service exposing a prediction endpoint, with the model loaded at startup for low-latency inference.',
  },
  {
    name: 'Test',
    detail: 'Validate the API with Postman — sending sample payloads to the prediction endpoint and confirming responses before containerising.',
  },
  {
    name: 'Scale',
    detail: 'Package as a Docker image and deploy on Kubernetes with a Deployment, a Service, and a Horizontal Pod Autoscaler for demand-based scaling.',
  },
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

export default function MlopsProject() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link href="/#ai-projects" className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8">
        ← Back to portfolio
      </Link>

      <div className="mb-8">
        <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--accent2)] tracking-[0.12em] uppercase mb-2">
          AI Project · 03
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] text-[var(--text)] leading-tight mb-2">
          MLOps — End-to-End
        </h1>
        <p className="text-[14px] text-[var(--muted)]">
          Train → Serve → Scale · FastAPI + Kubernetes
        </p>
      </div>

      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <p className="text-[14px] text-[var(--text-soft)] leading-[1.75]">
          A compact end-to-end MLOps loop that takes a small model all the way to a scalable deployment. The model itself is deliberately simple — the goal is to demonstrate the full path: training, serving behind an API, testing, and running on Kubernetes with autoscaling.
        </p>
      </div>

      {/* Architecture */}
      <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6 mb-6">
        <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-5">Architecture</h3>
        <div className="space-y-5">
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Build</div>
            <Flow nodes={[{ label: 'scikit-learn train' }, { label: 'model.pkl' }, { label: 'FastAPI app' }, { label: 'Docker image', accent: true }]} />
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Serve · Kubernetes</div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--accent)] text-[var(--bg)] border-[var(--accent)]">Deployment</span>
              <span className="text-[var(--accent2)]" aria-hidden>+</span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--bg)] text-[var(--text)] border-[var(--border)]">Service</span>
              <span className="text-[var(--accent2)]" aria-hidden>+</span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--bg)] text-[var(--text)] border-[var(--border)]">HPA</span>
              <span className="text-[var(--accent2)]" aria-hidden>→</span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] rounded-[8px] px-3 py-2 border bg-[var(--bg)] text-[var(--text)] border-[var(--border)]">Client</span>
            </div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mb-2">Test</div>
            <Flow nodes={[{ label: 'Postman' }, { label: 'POST /predict' }, { label: 'prediction + score' }]} />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-4">The pipeline</h3>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.name}>
                <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">{s.name}</h4>
                <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kubernetes */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Kubernetes manifests</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">deployment.yaml</h4>
              <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">Runs the FastAPI model container with a defined number of replicas and resource requests/limits.</p>
            </div>
            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">service.yaml</h4>
              <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">Exposes the pods behind a stable endpoint so the prediction API can be reached in-cluster or externally.</p>
            </div>
            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">hpa.yaml</h4>
              <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">Horizontal Pod Autoscaler that scales replicas up and down based on CPU / load, keeping the service responsive under traffic.</p>
            </div>
          </div>
        </div>

        {/* API contract */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">API contract</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">POST /predict</h4>
              <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">Accepts a JSON payload of input features and returns the model prediction with a confidence/score. The model is loaded once at startup and reused across requests to keep latency low.</p>
            </div>
            <div>
              <h4 className="text-[13px] font-medium text-[var(--text)] mb-1.5">GET /health</h4>
              <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">Lightweight liveness/readiness endpoint used by Kubernetes probes to confirm the pod is serving before routing traffic to it.</p>
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-6">
          <h3 className="text-[15px] font-medium text-[var(--accent2)] mb-3">Why this shape</h3>
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            The model is intentionally small so the focus stays on the operational path that most ML prototypes skip: packaging a trained artifact, exposing it as a versioned API, validating it with real requests, containerising it, and running it on Kubernetes with health checks and autoscaling. The same pattern scales up to larger models without changing the surrounding infrastructure.
          </p>
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
