import Layout from './Layout'
import useReveal from '../hooks/useReveal'

// Inline helpers for legal copy.
export function Mail({ to }) {
  return (
    <a href={`mailto:${to}`} className="accent-text hover:brightness-110 break-words">
      {to}
    </a>
  )
}

export function A({ href, children }) {
  return (
    <a href={href} className="accent-text hover:brightness-110 break-words">
      {children}
    </a>
  )
}

const text = 'text-white/65 leading-relaxed'

function Bullets({ items, ordered }) {
  if (ordered) {
    return (
      <ol className={`my-3 space-y-2 pl-6 list-decimal marker:text-white/40 ${text}`}>
        {items.map((item, j) => (
          <li key={j} className="pl-1">{item}</li>
        ))}
      </ol>
    )
  }
  return (
    <ul className="my-3 space-y-2 pl-1">
      {items.map((item, j) => (
        <li key={j} className={`flex gap-3 ${text}`}>
          <span className="accent-text mt-2.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Block types: { p }, { sub }, { list }, { olist }, { callout }, { caps }.
// Values may be strings or JSX.
function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.sub) return <h3 key={i} className="text-lg text-white/90 mt-6 mb-2">{b.sub}</h3>
    if (b.list) return <Bullets key={i} items={b.list} />
    if (b.olist) return <Bullets key={i} items={b.olist} ordered />
    if (b.callout) {
      return (
        <div key={i} className="my-4 rounded-xl border accent-border accent-bg-soft px-5 py-4 text-white/80 leading-relaxed">
          {b.callout}
        </div>
      )
    }
    if (b.caps) return <p key={i} className={`my-3 uppercase text-sm tracking-wide ${text}`}>{b.caps}</p>
    return <p key={i} className={`my-3 ${text}`}>{b.p}</p>
  })
}

// Renders a structured legal document. Sections are numbered automatically and
// get anchors (#section-1, #section-2, …) so the copy can cross-reference them.
export default function LegalPage({ title, updated, intro = [], summary, toc = false, sections, footer }) {
  useReveal()
  return (
    <Layout theme="theme-main">
      <section className="ambient relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 md:pt-28">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">Legal</p>
          <h1 className="reveal text-4xl md:text-6xl font-light">{title}</h1>
          <p className="reveal mt-4 text-sm text-white/40">Last updated: {updated}</p>
          {intro.map((node, i) => (
            <p key={i} className={`reveal mt-4 ${text}`}>{node}</p>
          ))}
          {summary && (
            <div className="reveal mt-8 rounded-xl border accent-border accent-bg-soft px-5 py-5">
              <h2 className="text-xl font-light text-white/90 mb-2">{summary.title}</h2>
              <Bullets items={summary.items} />
              {summary.note && <p className="text-sm text-white/50">{summary.note}</p>}
            </div>
          )}
          {toc && (
            <nav aria-label="Contents" className="reveal mt-8">
              <p className="text-sm tracking-[0.2em] uppercase text-white/45 mb-3">Contents</p>
              <ol className="sm:columns-2 gap-8 space-y-1 text-sm">
                {sections.map((s, i) => (
                  <li key={i} className="break-inside-avoid">
                    <a href={`#${s.id || `section-${i + 1}`}`} className="text-white/60 hover:text-white">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-10 space-y-10">
          {sections.map((s, i) => (
            <div key={i} id={s.id || `section-${i + 1}`} className="reveal scroll-mt-24">
              <h2 className="text-2xl font-light accent-text mb-2">
                {i + 1}. {s.heading}
              </h2>
              <Blocks blocks={s.blocks} />
            </div>
          ))}
          {footer && (
            <div className="reveal border-t border-line/60 pt-8 text-sm text-white/40">{footer}</div>
          )}
        </div>
      </section>
    </Layout>
  )
}
