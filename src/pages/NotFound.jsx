import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout theme="theme-main">
      <section className="mx-auto max-w-content px-6 py-32 text-center">
        <p className="text-7xl md:text-9xl font-light accent-text">404</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-light">This page drifted out to sea.</h1>
        <p className="mt-3 text-white/55">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-8 inline-block px-7 py-3 rounded-full bg-brand-blue text-ink text-sm tracking-widest uppercase hover:brightness-110 transition"
        >
          Back Home
        </Link>
      </section>
    </Layout>
  )
}
