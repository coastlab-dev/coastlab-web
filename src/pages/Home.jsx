import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import useReveal from '../hooks/useReveal'
import { CONTACT_EMAIL } from '../config'

export default function Home() {
  useReveal()
  return (
    <Layout theme="theme-main">
      {/* Hero */}
      <section className="ambient relative overflow-hidden">
        <div className="mx-auto max-w-content px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/50 mb-6">
            Software, thoughtfully made
          </p>
          <h1 className="reveal text-5xl md:text-7xl leading-[1.05] font-light max-w-4xl">
            Tools that make the way we use{' '}
            <span className="accent-text">technology</span> feel effortless.
          </h1>
          <p className="reveal mt-8 max-w-2xl text-lg md:text-xl text-white/65 leading-relaxed">
            CoastLaB Development builds products we're passionate about — starting
            with the small, everyday moments technology should get right.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <Link
              to="/vault"
              className="px-7 py-3 rounded-full bg-brand-blue text-ink text-sm tracking-widest uppercase hover:brightness-110 transition"
            >
              Meet Vault
            </Link>
            <a
              href="#about"
              className="px-7 py-3 rounded-full border border-line text-white/80 text-sm tracking-widest uppercase hover:accent-border hover:accent-text transition"
            >
              About Us
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About Us" title="Built from passion, for people.">
        <p className="reveal text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl">
          CoastLaB Development started with a passion for creating tools to
          enhance the everyday functions of how we use technology. Here at CoastLaB
          we start with projects we are passionate about internally and want to
          share with the world. We believe this intrinsic desire to create our
          products is imperative to driving innovation and staying empathetic to
          users.
        </p>
      </Section>

      {/* Current Projects */}
      <Section id="projects" eyebrow="Current Projects" title="What we're building.">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/vault"
            className="reveal group relative rounded-2xl border border-line bg-card p-8 overflow-hidden hover:accent-border transition"
          >
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-40"
              style={{ background: '#FF3B30' }}
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#FF3B30]">
                <span className="h-2 w-2 rounded-full bg-[#FF3B30]" /> iMessage App
              </div>
              <h3 className="mt-4 text-3xl font-light">Vault</h3>
              <p className="mt-1 text-white/50">Save and Send Sounds</p>
              <p className="mt-4 text-white/65 leading-relaxed">
                Create, save, and send voice clips without ever leaving iMessage.
                No account — just tap, talk, and send.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm tracking-widest uppercase group-hover:accent-text transition">
                Explore Vault →
              </span>
            </div>
          </Link>

          <div className="reveal rounded-2xl border border-dashed border-line/70 bg-surface/40 p-8 flex flex-col justify-center">
            <div className="text-xs tracking-[0.25em] uppercase text-white/35">
              Coming later
            </div>
            <h3 className="mt-4 text-2xl font-light text-white/60">More on the way</h3>
            <p className="mt-3 text-white/40 leading-relaxed">
              We're just getting started. Future products will live here as we
              keep building tools worth sharing.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact Us" title="Say hello.">
        <p className="reveal text-lg text-white/70 max-w-2xl leading-relaxed">
          Questions, ideas, or just want to talk shop? We'd love to hear from you.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="reveal mt-8 inline-block text-2xl md:text-4xl font-light accent-text hover:brightness-110 transition break-all"
        >
          {CONTACT_EMAIL}
        </a>
      </Section>
    </Layout>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line/50">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">
          {eyebrow}
        </p>
        <h2 className="reveal text-3xl md:text-5xl font-light mb-10">{title}</h2>
        {children}
      </div>
    </section>
  )
}
