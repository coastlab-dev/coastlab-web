import Layout from './Layout'
import useReveal from '../hooks/useReveal'
import { CONTACT_EMAIL } from '../config'

// Renders a structured legal document with placeholder copy.
export default function LegalPage({ title, updated, intro, sections }) {
  useReveal()
  return (
    <Layout theme="theme-main">
      <section className="ambient relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-10 md:pt-28">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">Legal</p>
          <h1 className="reveal text-4xl md:text-6xl font-light">{title}</h1>
          <p className="reveal mt-4 text-sm text-white/40">Last updated: {updated}</p>
          <div className="reveal mt-6 rounded-xl border accent-border accent-bg-soft px-5 py-4 text-sm text-white/70">
            Placeholder text — final legal copy to be drafted and reviewed before
            publishing. Will reference CoastLab Development LLC once the entity is formed.
          </div>
          {intro && (
            <p className="reveal mt-6 text-white/65 leading-relaxed">{intro}</p>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-12 space-y-12">
          {sections.map((s, i) => (
            <div key={i} className="reveal">
              <h2 className="text-2xl font-light accent-text mb-3">
                {i + 1}. {s.heading}
              </h2>
              <p className="text-white/65 leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
          <div className="reveal border-t border-line/60 pt-8 text-white/50">
            Questions about this document? Contact{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="accent-text hover:brightness-110">
              {CONTACT_EMAIL}
            </a>
            .
          </div>
        </div>
      </section>
    </Layout>
  )
}
