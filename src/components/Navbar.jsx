import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Wordmark from './Wordmark'

const links = [
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Vault', to: '/vault' },
  { label: 'Support', to: '/support' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
        <Wordmark />

        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase text-white/70">
          {links.map((l) => (
            <NavItem key={l.to} {...l} />
          ))}
        </div>

        <button
          className="md:hidden text-white/80 p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink/95 backdrop-blur-md border-b border-line">
          <div className="mx-auto max-w-content px-6 py-4 flex flex-col gap-1 text-sm tracking-widest uppercase text-white/75">
            {links.map((l) => (
              <NavItem key={l.to} {...l} mobile />
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function NavItem({ label, to, mobile }) {
  const isHash = to.includes('#')
  const cls = `transition-colors hover:accent-text ${mobile ? 'py-2.5' : ''}`
  if (isHash) {
    return (
      <a href={to} className={cls}>
        {label}
      </a>
    )
  }
  return (
    <Link to={to} className={cls}>
      {label}
    </Link>
  )
}
