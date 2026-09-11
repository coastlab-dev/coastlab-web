import Layout from '../components/Layout'
import useReveal from '../hooks/useReveal'

const VAULT_EMAIL = 'matlab0510@gmail.com'

// Vault Privacy Policy. Structured content — swap the effective/updated dates
// (currently placeholders) at App Store / TestFlight submission time.
const sections = [
  {
    heading: 'Who We Are',
    blocks: [
      { p: 'Vault is developed and operated by Matt LaBarca, an individual developer.' },
      {
        p: 'For purposes of the EU/UK General Data Protection Regulation, Matt LaBarca is the data controller for the limited personal information described in this policy.',
      },
      { p: `Contact: ${VAULT_EMAIL}`, email: true },
    ],
  },
  {
    heading: 'Summary',
    blocks: [
      {
        p: 'Vault is built so that we, the developer, see as little of your data as technically possible. We operate no servers and no backend database. Your audio clips are stored in your own iCloud account using Apple’s CloudKit framework. We cannot browse, download, or listen to the contents of your private Vault library.',
      },
      {
        p: 'The main exceptions — the things you should actually read about — are shared clips (Section 5) and reports you submit (Section 4.4).',
      },
    ],
  },
  {
    heading: 'Minimum Age',
    blocks: [
      {
        p: 'You must be at least 13 years old to use Vault. The App presents an age confirmation screen before use. We do not knowingly collect personal information from anyone under 13.',
      },
      {
        p: `If you believe a child under 13 is using Vault or that we have received information from a child under 13, contact us at ${VAULT_EMAIL} and we will take steps to address it promptly.`,
      },
    ],
  },
  {
    heading: 'Information the App Handles',
    blocks: [
      { sub: '4.1 Audio Clips and Related Content' },
      {
        list: [
          'Audio clips you record, import, or save (including clips imported from Voice Memos, the Files app, or saved from clips shared with you)',
          'Names or labels you assign to clips',
          'Basic organizational metadata such as creation date and clip duration',
        ],
      },
      {
        p: 'This content is stored as CloudKit records in your private iCloud database, associated with your Apple ID. It counts against your personal iCloud storage quota, in the same way Photos or Notes does. We do not receive a copy.',
      },
      { sub: '4.2 What Audio Clips May Contain' },
      {
        p: 'Audio clips can contain voices, background conversation, ambient sound, and other information that may be personal or sensitive. You control what you record and import. Please see Section 9 regarding your responsibilities when recording other people.',
      },
      { sub: '4.3 Age Confirmation' },
      {
        p: 'The App records a pass/fail flag locally on your device to avoid repeating the age confirmation check. This flag never leaves your device and is not transmitted anywhere. We do not collect, store, or transmit your date of birth.',
      },
      { sub: '4.4 Reports and Blocks' },
      {
        p: 'If you report a clip or block a user, the App records the minimum information needed to act on that report — such as a reference to the reported content, the fact that a report was made, and any description you provide. Reports are reviewed for safety and moderation purposes only.',
      },
      { sub: '4.5 What We Do NOT Do' },
      { p: 'Vault does not:' },
      {
        list: [
          'Require you to create an account with us or give us your name, email, or phone number',
          'Contain advertising SDKs, ad networks, or ad tracking',
          'Use third-party analytics services',
          'Sell, rent, or share your personal information for money or for cross-context behavioral advertising',
          'Track you across other apps or websites',
          'Create voiceprints, perform speaker identification, or use any biometric analysis of audio. We do not collect or process biometric identifiers or biometric information.',
        ],
      },
    ],
  },
  {
    heading: 'Sharing Clips — Please Read This Section',
    blocks: [
      {
        p: 'When you send a clip through Vault, the App creates an Apple CloudKit Share (a “CKShare”) and places a link to it in your iMessage. This is how the recipient is able to play the clip inside the message bubble.',
      },
      {
        callout:
          'Important: That share link is configured with read-only public permission. This means anyone who obtains the link can play that clip — not only the person you originally sent it to. If a recipient forwards your message, shares a screenshot of the link, or the link is otherwise disclosed, the audio may be accessible to people you did not intend.',
      },
      { p: 'Please treat shared clips as you would treat anything else sent over a messaging app: assume it may be forwarded.' },
      {
        p: 'Recipients who choose to save a shared clip create their own independent copy in their own iCloud account. Deleting or unsharing your original clip does not delete copies that recipients have already saved.',
      },
      {
        p: 'Deleting a clip from within the App removes it from your library and disables its associated share link. There is currently no option to stop sharing a clip without deleting it; this is a limitation we may address in a future version.',
      },
    ],
  },
  {
    heading: 'How Information Is Stored and Secured',
    blocks: [
      {
        p: 'Your clips reside in Apple’s CloudKit private database, tied to your iCloud account and protected by Apple’s iCloud security and encryption practices. Because we operate no backend of our own, we have no independent copy of your library and no administrative ability to access it.',
      },
      {
        p: 'Your use of Vault therefore also involves Apple as a service provider. Apple’s handling of iCloud data is governed by Apple’s Privacy Policy.',
      },
      {
        p: 'No system is perfectly secure. While we rely on Apple’s infrastructure and design the App to minimize data exposure, we cannot guarantee absolute security of information transmitted to or stored in iCloud, and we do not warrant that unauthorized access will never occur.',
      },
    ],
  },
  {
    heading: 'How Information Is Used',
    blocks: [
      { p: 'The limited information available to us is used only to:' },
      {
        list: [
          'Operate the App’s core features (saving, organizing, playing, and sharing clips)',
          'Enforce the minimum age requirement',
          'Review reports of inappropriate, abusive, or infringing content and take action such as disabling a share link or blocking a user',
          'Diagnose problems and maintain the App’s reliability',
        ],
      },
      {
        p: 'Under GDPR, our lawful bases are performance of a contract (providing the App’s functionality you requested) and legitimate interests (safety, moderation, and abuse prevention).',
      },
    ],
  },
  {
    heading: 'Disclosure of Information',
    blocks: [
      { p: 'We do not sell your personal information. Information may be disclosed only:' },
      {
        list: [
          'To Apple, as the provider of the iCloud/CloudKit infrastructure the App depends on',
          'When required by law, including in response to a valid subpoena, court order, or other lawful request',
          'To protect rights and safety, including investigating reports of abusive, harmful, or unlawful content, or responding to intellectual property complaints',
        ],
      },
    ],
  },
  {
    heading: 'Your Responsibilities When Recording',
    blocks: [
      {
        p: 'Laws in some U.S. states and in many other countries require the consent of all parties before a conversation may be recorded. You are solely responsible for ensuring that any audio you record, import, or share through Vault complies with the laws that apply to you and to the people in the recording, and for obtaining any consent required.',
      },
      {
        p: 'You are likewise responsible for ensuring you have the rights to any audio you import or share, including music, film, television, podcast, or other copyrighted material.',
      },
    ],
  },
  {
    heading: 'Copyright Complaints',
    blocks: [
      {
        p: `If you believe content shared through Vault infringes your copyright, contact us at ${VAULT_EMAIL} with a description of the copyrighted work, the location or share link of the allegedly infringing material, your contact information, and a statement of good-faith belief that the use is not authorized. We will respond to valid notices, including by disabling access to the material where appropriate.`,
      },
    ],
  },
  {
    heading: 'Your Choices and Rights',
    blocks: [
      {
        list: [
          'Delete clips: Delete individual clips or your entire library from within the App at any time. This removes them from your private CloudKit database.',
          'Stop sharing: Disable a share link at any time from within the App.',
          'Block and report: Block other users and report content directly in the App.',
          'Deleting the App: Uninstalling Vault does not automatically delete clips already stored in your iCloud account. Delete clips in the App first, or manage the data through your device’s iCloud storage settings.',
        ],
      },
      {
        p: 'If you are in the EU or UK, you have rights to access, correct, delete, restrict, object to, and port your personal data, and to lodge a complaint with your local supervisory authority.',
      },
      {
        p: 'If you are a California resident, you have rights under the CCPA/CPRA to know, delete, correct, and opt out of sale or sharing of personal information. We do not sell or share personal information as those terms are defined under California law, and we do not knowingly sell or share the personal information of consumers under 16.',
      },
      {
        p: `Because we hold almost no information about you directly, most requests are fulfilled through the in-App deletion controls described above. For anything else, contact ${VAULT_EMAIL}.`,
      },
    ],
  },
  {
    heading: 'Data Retention',
    blocks: [
      {
        p: 'Clips remain in your private iCloud database for as long as you keep them. We do not maintain independent copies. Records associated with reports and blocks are retained only as long as reasonably necessary for safety and moderation purposes.',
      },
    ],
  },
  {
    heading: 'International Users',
    blocks: [
      {
        p: 'Vault is offered from the United States. If you use the App from outside the United States, be aware that information may be processed in the United States and other countries, which may have different data protection laws than your own. Where your clips are physically stored is determined by Apple’s iCloud practices for your account, not by us.',
      },
    ],
  },
  {
    heading: 'Changes to This Policy',
    blocks: [
      {
        p: 'We may update this Privacy Policy from time to time. Material changes will be posted at this URL with a revised “Last Updated” date. Your continued use of Vault after changes are posted constitutes acceptance of the revised policy.',
      },
    ],
  },
  {
    heading: 'Contact',
    blocks: [{ p: `Matt LaBarca — ${VAULT_EMAIL}`, email: true }],
  },
]

function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.sub) {
      return (
        <h3 key={i} className="text-lg text-white/90 mt-6 mb-2">
          {b.sub}
        </h3>
      )
    }
    if (b.list) {
      return (
        <ul key={i} className="my-3 space-y-2 pl-1">
          {b.list.map((item, j) => (
            <li key={j} className="flex gap-3 text-white/65 leading-relaxed">
              <span className="accent-text mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    }
    if (b.callout) {
      return (
        <p
          key={i}
          className="my-4 rounded-xl border accent-border accent-bg-soft px-5 py-4 text-white/80 leading-relaxed"
        >
          {b.callout}
        </p>
      )
    }
    if (b.email) {
      const parts = b.p.split(VAULT_EMAIL)
      return (
        <p key={i} className="my-3 text-white/65 leading-relaxed">
          {parts[0]}
          <a href={`mailto:${VAULT_EMAIL}`} className="accent-text hover:brightness-110">
            {VAULT_EMAIL}
          </a>
          {parts[1]}
        </p>
      )
    }
    return (
      <p key={i} className="my-3 text-white/65 leading-relaxed">
        {b.p}
      </p>
    )
  })
}

export default function Privacy() {
  useReveal()
  return (
    <Layout theme="theme-main">
      <section className="ambient relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-8 md:pt-28">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-white/45 mb-4">Legal</p>
          <h1 className="reveal text-4xl md:text-6xl font-light">Privacy Policy for Vault</h1>
          <div className="reveal mt-4 space-y-1 text-sm text-white/40">
            <p>Effective Date: [DATE — use your TestFlight/App Store submission date]</p>
            <p>Last Updated: [DATE]</p>
          </div>
          <p className="reveal mt-6 text-white/65 leading-relaxed">
            Vault (“the App,” “we,” “us,” or “our”) is an iMessage app that lets you save,
            organize, and share personal audio clips directly in Messages. This Privacy
            Policy explains what information the App handles, how it is stored, and what
            choices you have.
          </p>
          <p className="reveal mt-3 text-white/65 leading-relaxed">
            By using Vault, you agree to the practices described in this policy. If you do
            not agree, please do not use the App.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-10 space-y-10">
          {sections.map((s, i) => (
            <div key={i} className="reveal">
              <h2 className="text-2xl font-light accent-text mb-2">
                {i + 1}. {s.heading}
              </h2>
              <Blocks blocks={s.blocks} />
            </div>
          ))}

          <p className="reveal border-t border-line/60 pt-8 text-sm text-white/40 italic leading-relaxed">
            This document describes Vault’s architecture accurately as of the Last Updated
            date: Apple CloudKit private database storage with CKShare-based sharing and no
            developer-operated backend. It is a starting draft prepared without attorney
            review.
          </p>
        </div>
      </section>
    </Layout>
  )
}
