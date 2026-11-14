import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, COMPANY } from '../config'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-content px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <div className="text-lg tracking-[0.18em] font-light">
            <span className="text-white">Coast</span>
            <span className="accent-text">Lab</span>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-2 inline-block text-sm text-white/55 hover:accent-text transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm tracking-widest uppercase text-white/60">
          <Link to="/vault" className="hover:accent-text transition-colors">Vault</Link>
          <Link to="/support" className="hover:accent-text transition-colors">Support</Link>
          <Link to="/privacy" className="hover:accent-text transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:accent-text transition-colors">Terms</Link>
        </div>
      </div>
      <div className="border-t border-line/60">
        <div className="mx-auto max-w-content px-6 py-5 text-xs text-white/40 tracking-wide">
          © {year} {COMPANY}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
