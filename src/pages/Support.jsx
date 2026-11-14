import { useState } from 'react'
import Layout from '../components/Layout'
import useReveal from '../hooks/useReveal'
import { CONTACT_EMAIL } from '../config'

const products = [
  {
    name: 'Vault',
    tagline: 'Save and Send Sounds',
    faqs: [
      {
        q: 'How do I record a clip?',
        a: 'Open the Vault app inside an iMessage conversation, tap the record button, and speak. When you\'re done, tap send to drop the clip straight into the thread.',
      },
      {
        q: 'Where are my clips stored?',
        a: 'Your clips are saved in your own private iCloud via CloudKit — not on CoastLab servers. They stay tied to your Apple account.',
      },
      {
        q: "My clip won't send — what do I check?",
        a: 'Make sure iMessage is enabled and you have a network connection, that Vault has permission to access the microphone, and that you have enough iCloud storage available. Restarting the Messages app often resolves temporary issues.',
      },
      {
        q: 'Can I save a clip someone sent me?',
        a: "Yes — tap a friend's Vault clip to add it to your own Vault so you can replay or resend it later.",
      },
      {
        q: 'Do I need to create an account?',
        a: 'No. Vault has no accounts or logins — it works with your existing Apple ID and iMessage.',
      },
    ],
  },
]

export default function Support() {
  useReveal()
  return (
    <Layout theme="theme-main">
      <section className="ambient relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-20 pb-12 md:pt-28">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">Support</p>
          <h1 className="reveal text-4xl md:text-6xl font-light">How can we help?</h1>
          <p className="reveal mt-6 max-w-2xl text-lg text-white/65 leading-relaxed">
            Find answers below, organized by product. Can't find what you need?
            Reach us anytime at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="accent-text hover:brightness-110">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      {products.map((product) => (
        <section key={product.name} className="border-t border-line/50">
          <div className="mx-auto max-w-content px-6 py-16 md:py-20">
            <div className="reveal flex items-baseline gap-3 mb-8">
              <h2 className="text-3xl md:text-4xl font-light accent-text">{product.name}</h2>
              <span className="text-white/40">{product.tagline}</span>
            </div>
            <div className="divide-y divide-line/60 border border-line rounded-2xl bg-card/60 overflow-hidden">
              {product.faqs.map((faq, i) => (
                <FAQ key={i} {...faq} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line/50">
        <div className="mx-auto max-w-content px-6 py-16 text-center">
          <h2 className="reveal text-2xl md:text-3xl font-light">Still stuck?</h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="reveal mt-4 inline-block text-xl md:text-2xl accent-text hover:brightness-110 transition break-all"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </Layout>
  )
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="reveal">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-white/[0.02] transition"
      >
        <span className="text-lg text-white/90">{q}</span>
        <span className={`accent-text text-2xl leading-none transition-transform ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`px-6 overflow-hidden transition-all ${open ? 'max-h-60 pb-6' : 'max-h-0'}`}>
        <p className="text-white/60 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}
