import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import useReveal from '../hooks/useReveal'
import { WAITLIST } from '../config'
import { EMAIL_RE, joinWaitlist, waitlistReady } from '../lib/waitlist'

// Vault waitlist — coastlab.dev/vault/waitlist
// Uses the Vault app's own brand (Comfortaa + Outfit, indigo accent, pink→indigo
// logo gradient, gold sparkle for Vault Plus) so it matches the TikTok ads and
// App Store screenshots people arrive from. Tokens live under .theme-vaultapp in index.css.

const SHARE_TEXT = 'ok we need this for the gc. vault saves our clips + we get a shared vault 👀'

export default function Waitlist() {
  useReveal()
  useEffect(() => {
    const prev = document.title
    document.title = 'Vault — join the waitlist'
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <Layout theme="theme-vaultapp">
      <Hero />
      <Features />
      <PlusBand />
      <BringTheChat />
      <Faq />
    </Layout>
  )
}

/* ---------------------------------------------------------------- hero */

function Hero() {
  return (
    <section className="va-glow relative overflow-hidden">
      <div className="mx-auto max-w-content px-6 pt-14 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.05fr_.95fr] gap-14 items-center">
        <div>
          <div className="reveal flex items-center gap-3">
            <img src="/brand/vault/vault-mark.png" alt="" className="h-9 w-auto" />
            <img src="/brand/vault/vault-wordmark-white.png" alt="Vault" className="h-7 w-auto" />
          </div>
          <h1 className="reveal va-display mt-8 text-[2.6rem] leading-[1.08] md:text-6xl md:leading-[1.05]">
            your group chat&rsquo;s inside jokes, <span className="va-grad-text">saved.</span>
          </h1>
          <p className="reveal va-body mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
            Save the clips your friends can&rsquo;t stop quoting and send them back in one tap,
            right inside iMessage. Now with shared vaults for the whole crew.
          </p>
          <div className="reveal mt-9 max-w-md">
            <WaitlistForm id="hero" />
          </div>
        </div>
        <div className="reveal flex justify-center md:justify-end">
          <HeroPhone />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- form */

function WaitlistForm({ id }) {
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(false)
  const [state, setState] = useState('idle') // idle | sending | done | error
  const [msg, setMsg] = useState('')
  const [already, setAlready] = useState(false)
  const honey = useRef(null)

  async function submit(e) {
    e.preventDefault()
    if (honey.current?.value) return // bot filled the hidden field
    const clean = email.trim()
    if (!EMAIL_RE.test(clean)) {
      setState('error')
      setMsg('That email doesn’t look right.')
      return
    }
    if (!age) {
      setState('error')
      setMsg('Vault is for ages 13 and up. Tick the box to join.')
      return
    }
    setState('sending')
    setMsg('')
    try {
      const r = await joinWaitlist(clean, age)
      setAlready(r.already)
      setState('done')
    } catch (err) {
      setState('error')
      setMsg(err.message)
    }
  }

  // Before the Google Sheet is connected (WAITLIST.endpoint empty), show an
  // "opening soon" card instead of a form that can't save anything.
  if (!waitlistReady()) {
    return (
      <div className="va-card p-6 va-body">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF2D78] opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF2D78]" />
          </span>
          <span className="va-display text-xl">waitlist opens soon</span>
        </div>
        <p className="mt-2 text-white/70">
          Vault is coming to iPhone. Sign-ups open here shortly, so send this page to the group
          chat and check back.
        </p>
        <div className="mt-4">
          <ShareButtons compact />
        </div>
      </div>
    )
  }

  if (state === 'done') {
    return (
      <div className="va-card p-6" role="status" aria-live="polite">
        <div className="va-display text-2xl">{already ? 'you’re already in 🫡' : 'you’re in 🎉'}</div>
        <p className="va-body mt-2 text-white/70">
          We&rsquo;ll email you the day Vault hits the App Store. Vaults are better with the crew,
          so send this to the group chat.
        </p>
        <div className="mt-4">
          <ShareButtons compact />
        </div>
      </div>
    )
  }

  const errId = `wl-err-${id}`
  return (
    <form onSubmit={submit} noValidate className="va-body">
      <div className="va-field flex flex-col sm:flex-row gap-2 p-1.5 rounded-[18px]">
        <label htmlFor={`wl-email-${id}`} className="sr-only">Email</label>
        <input
          id={`wl-email-${id}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={state === 'error'}
          aria-describedby={state === 'error' ? errId : undefined}
          className="flex-1 min-w-0 bg-transparent px-4 py-3 text-base text-white placeholder:text-white/35 outline-none"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="va-btn rounded-[14px] px-6 py-3 text-base font-semibold text-white disabled:opacity-60"
        >
          {state === 'sending' ? 'Joining…' : 'Get early access'}
        </button>
      </div>
      {/* honeypot */}
      <input ref={honey} type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="mt-4 flex items-start gap-3 text-sm text-white/60 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={age}
          onChange={(e) => setAge(e.target.checked)}
          className="va-check mt-0.5 h-4 w-4 shrink-0"
        />
        <span>
          I&rsquo;m 13 or older, and I&rsquo;m OK getting emails about Vault. Unsubscribe anytime.{' '}
          <Link to="/privacy#waitlist" className="underline decoration-white/30 hover:text-white">Privacy</Link>
        </span>
      </label>
      <p id={errId} className="mt-3 min-h-[1.25rem] text-sm text-[#FF6BB5]" aria-live="polite">
        {state === 'error' ? msg : ''}
      </p>
    </form>
  )
}

/* ---------------------------------------------------------------- share */

function ShareButtons({ compact = false }) {
  const [copied, setCopied] = useState(false)
  const url = WAITLIST.shareUrl
  const smsHref = `sms:&body=${encodeURIComponent(`${SHARE_TEXT} ${url}`)}`

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Vault', text: SHARE_TEXT, url })
        return
      } catch {
        /* cancelled — fall through to copy */
      }
    }
    copy()
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className={`va-body flex flex-wrap gap-3 ${compact ? '' : 'justify-center'}`}>
      <a href={smsHref} className="va-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white">
        <ChatIcon /> Text the group chat
      </a>
      <button onClick={share} className="va-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
        <LinkIcon /> {copied ? 'Link copied' : 'Share link'}
      </button>
    </div>
  )
}

/* ---------------------------------------------------------------- features */

const features = [
  {
    k: 'save',
    title: 'save the moment',
    body: 'Record it, or pull the audio straight from a video. Trim it, name it, keep it.',
    art: <MiniClip name="he said WHAT" dur="0:06" />,
  },
  {
    k: 'send',
    title: 'send it back in one tap',
    body: 'Open Vault in iMessage, tap a clip, and it lands in the chat. No app switching.',
    art: <MiniBubble />,
  },
  {
    k: 'shared',
    title: 'one vault for the crew',
    body: 'Start a shared vault for the group chat. Everyone adds clips, everyone can use them.',
    art: <MiniCrew />,
    isNew: true,
  },
]

function Features() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="reveal va-eyebrow">what it does</p>
        <h2 className="reveal va-display mt-3 text-3xl md:text-5xl">the clips you keep quoting. on tap.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.k} className="reveal va-card p-6 flex flex-col gap-5">
              <div className="va-art rounded-2xl p-4 h-[148px] flex items-center justify-center">{f.art}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="va-display text-xl">{f.title}</h3>
                  {f.isNew && <span className="va-new">new</span>}
                </div>
                <p className="va-body mt-2 text-white/65 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- plus */

const perks = ['Save up to 50 clips', 'Clips up to 20 seconds', 'Your photo in the player', 'Gradient clip colors']

function PlusBand() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-content px-6 py-20 md:py-24">
        <div className="reveal va-plus-card rounded-[28px] p-7 md:p-12 grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 text-[#F0B649]">
              <Sparkle className="h-5 w-5" />
              <span className="va-display text-lg">Vault Plus</span>
            </div>
            <h2 className="va-display mt-4 text-3xl md:text-[2.6rem] leading-tight text-white">
              pay once. it&rsquo;s yours.
            </h2>
            <p className="va-body mt-4 text-white/70 text-lg max-w-lg">
              Vault is free. If your vault fills up, Plus is a one-time $9.99 upgrade. No
              subscription, ever.
            </p>
          </div>
          <ul className="va-body grid gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-2xl bg-black/30 border border-white/10 px-4 py-3 text-white/90">
                <span className="grid place-items-center h-7 w-7 rounded-lg bg-[#F0B649]/15 text-[#F0B649]">
                  <Sparkle className="h-3.5 w-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- bring the chat */

function BringTheChat() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-content px-6 py-20 md:py-24 text-center">
        <h2 className="reveal va-display text-3xl md:text-5xl">vaults are better with the crew.</h2>
        <p className="reveal va-body mt-4 text-white/65 text-lg max-w-xl mx-auto">
          Get the group chat on the list so your shared vault is ready on day one.
        </p>
        <div className="reveal mt-8">
          <ShareButtons />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- faq */

const faqs = [
  ['When does Vault launch?', 'Soon. Everyone on the list gets an email the day it’s on the App Store.'],
  ['Is it free?', 'Yes. Vault is free. Vault Plus is an optional one-time upgrade for more and longer clips.'],
  ['Do I need an account?', 'No. Vault uses your iCloud, and your clips live in your own iCloud storage, not on our servers.'],
  ['Android?', 'Vault lives inside iMessage, so it’s iPhone only.'],
]

function Faq() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <h2 className="reveal va-display text-3xl md:text-4xl">questions</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {faqs.map(([q, a]) => (
            <details key={q} className="reveal group py-5">
              <summary className="va-body flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-white/90">
                {q}
                <span className="text-white/40 transition group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="va-body mt-3 text-white/65 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
        <div className="reveal mt-14 max-w-md mx-auto">
          <WaitlistForm id="footer" />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- phone art */

const crews = [
  { t: 'the boys', faces: ['J', 'M'], more: 3, cover: 'linear-gradient(135deg,#FF2D78,#5856D6)', nw: 3 },
  { t: 'lake trip ’26', faces: ['S', 'M'], more: 1, cover: 'linear-gradient(135deg,#2BB3C0,#1E5A8C)', clips: 21 },
  { t: 'roommates', faces: ['M', 'T'], nw: 1 },
  { t: 'bio lab group', faces: ['R', 'M', 'L'], more: 1, clips: 7 },
  { t: 'cousins', faces: ['A', 'B'], more: 4, cover: 'linear-gradient(135deg,#F7B267,#F25F5C)', nw: 5 },
  { t: '2am voice notes', faces: ['M', 'Z'], clips: 5 },
]
const FACE = { J: '#F08A24', M: '#18A999', S: '#2D9CDB', T: '#E5487A', R: '#8E6CEF', L: '#5C6BC0', A: '#E5487A', B: '#2BB3C0', Z: '#E5487A' }

function Face({ l, size = 22 }) {
  return (
    <span
      className="grid place-items-center rounded-full text-white font-bold border-2 border-[#1C1C1C]"
      style={{ width: size, height: size, background: FACE[l] || '#575AF7', fontSize: size * 0.45 }}
    >
      {l}
    </span>
  )
}

function Faces({ list, more }) {
  return (
    <span className="flex">
      {list.map((l, i) => (
        <span key={i} style={{ marginLeft: i ? -7 : 0 }}><Face l={l} /></span>
      ))}
      {more ? (
        <span style={{ marginLeft: -7 }} className="grid place-items-center h-[22px] min-w-[22px] px-1 rounded-full bg-[#2E2E2E] border-2 border-[#1C1C1C] text-[9px] text-white/70 font-semibold">
          +{more}
        </span>
      ) : null}
    </span>
  )
}

function HeroPhone() {
  return (
    <div className="relative">
      <div className="va-phone relative w-[290px] h-[600px] rounded-[48px] p-[10px]">
        <div className="relative h-full w-full rounded-[38px] bg-black overflow-hidden flex flex-col va-body text-white">
          <div className="flex items-center justify-between px-7 pt-3 text-[13px] font-semibold">
            <span>9:41</span>
            <span className="h-[26px] w-[86px] rounded-full bg-black border border-white/5" />
            <span className="h-3 w-6 rounded-[4px] border border-white/70 p-[1.5px]"><span className="block h-full w-3/4 bg-white/80 rounded-[2px]" /></span>
          </div>
          <div className="flex items-center justify-between px-4 pt-5 pb-3">
            <span className="va-display text-[26px]">Shared</span>
            <span className="grid place-items-center h-8 w-8 rounded-full bg-[#2E2E2E] text-[#575AF7] text-xl leading-none">+</span>
          </div>
          <div className="grid grid-cols-2 gap-2 px-3">
            {crews.map((c) => (
              <div key={c.t} className="relative rounded-[14px] bg-[#1C1C1C] p-2.5 flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  {c.cover && <span className="h-[26px] w-[26px] rounded-[7px]" style={{ background: c.cover }} />}
                  <Faces list={c.faces} more={c.more} />
                </div>
                <span className="absolute top-3 right-2.5 text-white/40"><Chevron /></span>
                <span className="text-[13.5px] font-semibold truncate">{c.t}</span>
                {c.nw ? (
                  <span className="self-start rounded-full bg-[#575AF7] px-2 py-[1px] text-[10px] font-semibold">{c.nw} new</span>
                ) : (
                  <span className="text-[11px] text-white/50">{c.clips} clips</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto mx-10 mb-5 flex items-center justify-around rounded-full bg-[#1C1C1C]/90 border border-white/5 py-2.5 text-white/45">
            <TabIcon d="M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
            <TabIcon d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
            <TabIcon d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
            <span className="text-[#575AF7]"><TabIcon d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14a6 6 0 0 1 3 5" /></span>
          </div>
        </div>
      </div>
      {/* floating Plus clip card */}
      <div className="absolute -left-10 md:-left-16 bottom-24 w-[178px] rounded-[16px] bg-[#1C1C1C] p-3 va-float shadow-2xl border border-white/10 va-body text-white">
        <Wave color="#F0B649" n={22} h={30} />
        <div className="mt-2 flex items-end justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[13px] font-semibold truncate">the full rant</span>
              <span className="rounded-[4px] border border-[#F0B649] px-1 text-[8px] font-bold tracking-wider text-[#F0B649]">PLUS</span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10.5px] text-white/55">
              <Face l="A" size={14} /> Ari · <span className="text-[#F0B649] font-semibold">0:18</span>
            </div>
          </div>
          <span className="grid place-items-center h-7 w-7 rounded-full bg-[#575AF7]"><PlayIcon /></span>
        </div>
      </div>
    </div>
  )
}

function MiniClip({ name, dur }) {
  return (
    <div className="w-[200px] rounded-[14px] bg-[#1C1C1C] p-3 text-white va-body">
      <Wave color="#575AF7" n={24} h={30} progress={0.45} />
      <div className="mt-2 flex items-end justify-between">
        <div>
          <div className="text-[13px] font-semibold">{name}</div>
          <div className="text-[11px] text-white/50">{dur}</div>
        </div>
        <span className="grid place-items-center h-7 w-7 rounded-full bg-[#575AF7]"><PlayIcon /></span>
      </div>
    </div>
  )
}

function MiniBubble() {
  return (
    <div className="w-[220px] flex flex-col gap-2 va-body">
      <div className="self-start rounded-[18px] bg-[#262628] px-3 py-2 text-[13px] text-white/90">play the clip 😭</div>
      <div className="self-end w-[160px] overflow-hidden rounded-[18px] border border-white/10">
        <div className="bg-black h-[52px] flex flex-col items-center justify-center gap-1">
          <img src="/brand/vault/vault-mark.png" alt="" className="h-5 w-auto" />
          <span className="text-[9px] tracking-wider text-white/85">tap to play</span>
        </div>
        <div className="bg-[#2C2C2E] px-2.5 py-1.5 text-[11px] text-white/85">bruh moment</div>
      </div>
    </div>
  )
}

function MiniCrew() {
  return (
    <div className="w-[200px] rounded-[14px] bg-[#1C1C1C] p-3 text-white va-body relative">
      <div className="flex items-center gap-1.5">
        <span className="h-[26px] w-[26px] rounded-[7px]" style={{ background: 'linear-gradient(135deg,#FF2D78,#5856D6)' }} />
        <Faces list={['J', 'M', 'S']} more={2} />
      </div>
      <span className="absolute top-4 right-3 text-white/40"><Chevron /></span>
      <div className="mt-2 text-[14px] font-semibold">the boys</div>
      <span className="mt-1 inline-block rounded-full bg-[#575AF7] px-2 py-[1px] text-[10px] font-semibold">3 new</span>
    </div>
  )
}

function Wave({ color, n = 24, h = 28, progress = 1 }) {
  const bars = Array.from({ length: n }, (_, i) => 0.25 + Math.abs(Math.sin(i * 0.9) * Math.cos(i * 0.37)) * 0.75)
  return (
    <div className="flex items-center gap-[3px]" style={{ height: h }}>
      {bars.map((v, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full"
          style={{ height: `${v * 100}%`, background: i / n < progress ? color : '#616161' }}
        />
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------- icons */

function Sparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c.6 4.8 2.7 7.4 8 8.2v1.6c-5.3.8-7.4 3.4-8 8.2h-1.6c-.6-4.8-2.7-7.4-8-8.2v-1.6c5.3-.8 7.4-3.4 8-8.2H12Z" />
    </svg>
  )
}
function Chevron() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 5 7 7-7 7" />
    </svg>
  )
}
function PlayIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="M7 4.5v15l13-7.5L7 4.5Z" />
    </svg>
  )
}
function TabIcon({ d }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
    </svg>
  )
}
function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
    </svg>
  )
}
