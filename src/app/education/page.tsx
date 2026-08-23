import Link from 'next/link'

const educationTimeline = [
  {
    year: '2019',
    degree: 'PG Diploma in Fashion Design',
    institute: 'JD Institute of Fashion Technology',
    description: 'Postgraduate specialization in Fashion Design',
  },
  {
    year: '2018',
    degree: 'Bachelor of Commerce (B.Com.)',
    institute: 'Kanoria PG Mahavidhyalaya',
    description: 'Undergraduate programme in Commerce',
  },
  {
    year: '2015',
    degree: 'Higher Secondary (Class XII)',
    institute: 'Subodh Public School',
    description: 'Higher secondary education',
  },
]

const certifications = [
  { name: 'Generative AI Marketing Professional', issuer: 'American Marketing Association' },
  { name: 'Inbound Marketing', issuer: 'HubSpot' },
  { name: 'Google Analytics', issuer: 'Google' },
  { name: 'Product Management', issuer: 'Aha! / LinkedIn Learning' },
  { name: 'Turning Data into Strategies', issuer: 'LinkedIn Learning' },
  { name: 'Marketing Automation', issuer: 'Simplilearn' },
  { name: 'Negotiation', issuer: 'American Negotiation Institute' },
]

export default function EducationPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-24 pb-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-10"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent)] mb-2">
          Academic Journey
        </div>
        <h1 className="text-[28px] font-[family-name:var(--font-display)] text-[var(--text)] mb-2">
          Education
        </h1>
        <p className="text-[13px] text-[var(--muted)] leading-[1.7] max-w-[620px]">
          A commerce and design foundation that grew into marketing, and now into AI / ML engineering — with continuous upskilling in generative AI and data along the way.
        </p>
      </div>

      {/* Educational Background */}
      <section className="mb-14">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Educational Background
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)]">Year</th>
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)]">Qualification</th>
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)]">Institute</th>
                <th className="px-5 py-3 text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.08em] text-[var(--muted)] hidden sm:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {educationTimeline.map((edu, i) => (
                <tr key={edu.degree} className={i < educationTimeline.length - 1 ? 'border-b border-[var(--border)]' : ''}>
                  <td className="px-5 py-4 font-[family-name:var(--font-mono)] text-[12px] text-[var(--muted)] whitespace-nowrap">{edu.year}</td>
                  <td className="px-5 py-4 text-[13px] font-medium text-[var(--text)]">{edu.degree}</td>
                  <td className="px-5 py-4 text-[12px] text-[var(--text-soft)]">{edu.institute}</td>
                  <td className="px-5 py-4 text-[11px] text-[var(--muted)] hidden sm:table-cell">{edu.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-14">
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Certifications
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((c) => (
            <div key={c.name} className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-4">
              <div className="text-[13px] font-medium text-[var(--text)] mb-1">{c.name}</div>
              <div className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)]">{c.issuer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Origin Story */}
      <section>
        <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[var(--accent)] mb-5">
          Origin Story
        </div>
        <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[10px] p-5">
          <p className="text-[13px] text-[var(--text-soft)] leading-[1.7]">
            Fashion retail → e-commerce marketplace → enterprise IT → AI engineering. The industries changed and the toolkit kept growing; the diagnostic, build-and-ship mindset stayed the same.
          </p>
        </div>
      </section>
    </main>
  )
}
