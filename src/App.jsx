import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Vault from './pages/Vault'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import Waitlist from './pages/Waitlist'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vault" element={<Vault />} />
      <Route path="/support" element={<Support />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/vault/waitlist" element={<Waitlist />} />
      <Route path="/waitlist" element={<OldWaitlist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

// coastlab.dev/waitlist moved to /vault/waitlist. Keep old links working,
// including their ?utm_source tags.
function OldWaitlist() {
  const { search, hash } = useLocation()
  return <Navigate to={`/vault/waitlist${search}${hash}`} replace />
}
