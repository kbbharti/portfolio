'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  // Homepage is self-contained; no top nav there.
  if (pathname === '/') return null

  return (
    <nav className="ed-nav">
      <div className="nav-inner">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div className="nav-mono">Khushbu Bharti</div>
          <div className="nav-role">Aspiring AI / ML Engineer</div>
        </Link>
        <Link className="nav-cta" href="/#ai-projects">
          View AI Projects →
        </Link>
      </div>
    </nav>
  )
}
