import { Link } from 'react-router-dom'

// Styled text wordmark placeholder (no image logo yet).
export default function Wordmark({ to = '/', className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-baseline text-2xl tracking-[0.18em] font-light ${className}`}
    >
      <span className="text-white">Coast</span>
      <span className="accent-text">Lab</span>
    </Link>
  )
}
