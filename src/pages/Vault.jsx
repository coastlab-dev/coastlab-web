import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import useReveal from '../hooks/useReveal'
import AppStoreBadge from '../components/AppStoreBadge'
import {
  IconRecord, IconSend, IconPlay, IconChat, IconBolt,
  IconShield, IconFilm, IconBookmark, IconUsers,
} from '../components/icons'

const features = [
  { icon: IconChat, title: 'Native to iMessage', body: 'Create and send audio clips right in the conversation, no app switching.' },
  { icon: IconBolt, title: 'One-tap playback', body: 'Clips play instantly for the person you send them to.' },
  { icon: IconShield, title: 'Private by design', body: 'Your clips live in your own iCloud, not on a company server.' },
  { icon: IconFilm, title: 'Upload audio from video', body: 'Upload, extract and trim audio from your favorite videos.' },
  { icon: IconBookmark, title: "Save friends' Vault clips", body: "Add friends' Vault clips to your own Vault." },
  { icon: IconUsers, title: 'Shared Vaults', body: 'Build a running audio collection with friends or family.', soon: true },
]

const steps = [
  { icon: IconRecord, title: 'Record', body: 'Tap and talk — capture the moment in seconds.' },
  { icon: IconSend, title: 'Send', body: 'Drop it straight into the conversation.' },
  { icon: IconPlay, title: 'Play', body: 'It plays instantly, right where it lands.' },
]

export default function Vault() {
  useReveal()
  return (
    <Layout theme="theme-vault">
      {/* Hero */}
      <section className="ambient relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-24 pb-24 md:pt-32 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase accent-text mb-6">
              <VaultMark className="h-5 w-5" /> Vault
            </div>
            <h1 className="reveal text-5xl md:text-7xl leading-[1.05] font-light">
              Save and send <span className="accent-text">sounds.</span>
            </h1>
            <p className="reveal mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Vault lets you create, save, and send voice clips without ever leaving
              iMessage. No account to create — just tap, talk, and send.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <AppStoreBadge />
              <Link
                to="/waitlist"
                className="inline-flex items-center px-7 py-3 rounded-full border accent-border accent-text text-sm tracking-widest uppercase hover:accent-bg-soft transition"
              >
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="reveal flex justify-center md:justify-end">
            <PhoneMock />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-line/50">
        <div className="mx-auto max-w-content px-6 py-20 md:py-24">
          <p className="reveal text-2xl md:text-3xl font-light leading-relaxed max-w-3xl text-white/80">
            Built for the real, live moments a text doesn't quite capture: a laugh,
            a quick update, a voice memo you actually want to keep.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line/50 bg-surface/40">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">How it works</p>
          <h2 className="reveal text-3xl md:text-5xl font-light mb-14">Record → Send → Play</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="reveal relative rounded-2xl border border-line bg-card p-8">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl accent-bg-soft accent-text">
                  <s.icon />
                </div>
                <div className="mt-6 text-xs tracking-[0.25em] uppercase text-white/40">
                  Step {i + 1}
                </div>
                <h3 className="mt-2 text-2xl font-light">{s.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-line/50">
        <div className="mx-auto max-w-content px-6 py-20 md:py-28">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">Features</p>
          <h2 className="reveal text-3xl md:text-5xl font-light mb-14">Everything, in the thread.</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="reveal rounded-2xl border border-line bg-card p-7 hover:accent-border transition">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl accent-bg-soft accent-text">
                  <f.icon />
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <h3 className="text-xl font-light">{f.title}</h3>
                  {f.soon && (
                    <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border accent-border accent-text">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-white/60 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line/50">
        <div className="mx-auto max-w-content px-6 py-20 md:py-24 text-center">
          <h2 className="reveal text-3xl md:text-5xl font-light">Ready when you are.</h2>
          <p className="reveal mt-4 text-white/60 max-w-xl mx-auto">
            Vault is on its way to the App Store. Need a hand in the meantime?
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/waitlist"
              className="inline-flex items-center px-7 py-3 rounded-full border accent-border accent-text text-sm tracking-widest uppercase hover:accent-bg-soft transition"
            >
              Join the waitlist
            </Link>
            <Link
              to="/support"
              className="inline-flex items-center px-7 py-3 rounded-full border border-line text-white/80 text-sm tracking-widest uppercase hover:accent-border hover:accent-text transition"
            >
              Vault Support
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

function VaultMark({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h3.5" strokeLinecap="round" />
    </svg>
  )
}

function PhoneMock() {
  return (
    <div className="relative w-[260px] h-[520px] rounded-[2.5rem] border border-line bg-gradient-to-b from-surface to-ink shadow-2xl p-3">
      <div className="absolute left-1/2 -translate-x-1/2 top-3 h-5 w-24 rounded-full bg-black/70" />
      <div className="h-full w-full rounded-[2rem] bg-ink/80 border border-line/60 overflow-hidden flex flex-col">
        <div className="px-4 pt-8 pb-3 border-b border-line/50 text-center text-white/50 text-xs tracking-widest uppercase">
          Messages
        </div>
        <div className="flex-1 p-4 space-y-3">
          <Bubble side="left">Send me that laugh again 😂</Bubble>
          <Waveform side="right" />
          <Bubble side="left">saving that one forever</Bubble>
          <Waveform side="left" muted />
        </div>
        <div className="p-3 border-t border-line/50 flex items-center gap-2">
          <div className="flex-1 h-9 rounded-full border border-line/60 bg-black/40" />
          <div className="h-11 w-11 rounded-full flex items-center justify-center accent-text accent-bg-soft border accent-border">
            <IconRecord width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Bubble({ side, children }) {
  const right = side === 'right'
  return (
    <div className={`flex ${right ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${right ? 'bg-brand-deep/40 text-white' : 'bg-card text-white/80'}`}>
        {children}
      </div>
    </div>
  )
}

function Waveform({ side, muted }) {
  const right = side === 'right'
  const bars = [8, 16, 24, 14, 20, 10, 26, 12, 18, 8, 22, 14]
  return (
    <div className={`flex ${right ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-2xl ${
          right ? 'accent-bg-soft border accent-border' : 'bg-card'
        }`}
      >
        <IconPlay width={18} height={18} className={muted ? 'text-white/50' : 'accent-text'} />
        <div className="flex items-end gap-[3px] h-6">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`w-[3px] rounded-full ${muted ? 'bg-white/30' : right ? 'bg-[var(--accent)]' : 'bg-white/40'}`}
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
