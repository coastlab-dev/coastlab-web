import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

// theme: 'theme-main' (blue) or 'theme-vault' (red). Kept per-page so themes never bleed.
export default function Layout({ theme = 'theme-main', children }) {
  const { pathname, hash } = useLocation()

  // Scroll to top on route change, or to the hash target when present.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return (
    <div className={`${theme} min-h-screen flex flex-col`}>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
