import LegalPage, { Mail, A } from '../components/LegalPage'
import { CONTACT_EMAIL, COMPANY_LEGAL } from '../config'

const sections = [
  {
    heading: 'Who we are',
    blocks: [
      {
        p: (
          <>
            Vault is operated by {COMPANY_LEGAL}. If you have any questions about this policy or
            your data, contact us at <Mail to={CONTACT_EMAIL} />.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Information Vault handles',
    blocks: [
      { sub: 'a. Audio clips and clip details' },
      {
        p: 'When you record a clip, or import one from the Files app, Voice Memos, a video, the iOS share sheet, or Shortcuts, Vault stores the resulting audio file and the details you give it (such as the clip’s name and whether you mark it as a favorite) on your device.',
      },
      {
        p: 'Audio you import from a video is extracted on your device using the system media picker. Vault only receives the specific item you select; it does not browse or access your broader photo or video library.',
      },
      { sub: 'b. iCloud storage and sync (CloudKit)' },
      {
        p: `Clips you create are uploaded to your own private iCloud database associated with your Apple Account, using Apple’s CloudKit. This is used to back up your clips and to enable sharing. Vault stores these clips only in your private iCloud database — never in a public database. We (${COMPANY_LEGAL}) cannot see the contents of your private iCloud data; it is governed by Apple’s iCloud terms and your device’s iCloud settings.`,
      },
      { sub: 'c. Sharing clips (CKShare and iMessage)' },
      {
        p: 'When you send a clip through the Vault iMessage extension, Vault creates a read‑only share link to that clip in iCloud and sends it in your message. To let the recipient play the clip and to support safety features (blocking and reporting), the share includes:',
      },
      {
        list: [
          'the audio clip, its name, and its length;',
          'your display name, if you have set one in Settings; and',
          'your iCloud identity information, specifically a stable Apple user record identifier and the name associated with your Apple Account. If you have not set a display name, the name associated with your Apple Account is shown to the recipient as the sender’s name.',
        ],
      },
      {
        p: 'Recipients can play clips you send them. Received clips are cached temporarily on the recipient’s device (for up to 24 hours) so they load quickly, and are then re‑checked against iCloud.',
      },
      { sub: 'd. Display name' },
      {
        p: 'If you set a display name in Settings, it is stored locally on your device (in Vault’s shared app storage) and is included in each clip you send, where it is shown to recipients as the sender’s name. If you leave it blank, recipients see the name associated with your Apple Account instead, as described above. You can change or clear your display name at any time.',
      },
      { sub: 'e. Age verification' },
      {
        p: 'When you first use Vault, we ask for your date of birth to confirm you are at least 13 years old. Your date of birth is used only to make this calculation and is not stored. Vault saves only a pass/fail result and the date the check occurred.',
      },
      { sub: 'f. App Lock (Face ID / Touch ID)' },
      {
        p: 'If you enable App Lock, Vault uses Face ID, Touch ID, or your device passcode to unlock the app. This authentication is handled entirely by iOS. Vault never receives or stores your biometric data.',
      },
      { sub: 'g. Blocking and hiding' },
      {
        list: [
          <><strong className="text-white/85">Blocking a sender:</strong> The sender’s Apple user record identifier is stored on your device and in your private iCloud database so your blocks stay in sync across your devices.</>,
          <><strong className="text-white/85">Hiding a clip:</strong> The hidden clip’s identifier (and name, for display) is stored only on your device.</>,
        ],
      },
      { sub: 'h. Reporting content' },
      {
        p: 'If you report a clip, Vault sends a report to our report‑handling provider, Formspree, so we can review potential abuse. A report includes the clip’s name, the clip’s identifier, the sender’s Apple user record identifier, a timestamp, and the description you write. This information is used solely to review reports and enforce our content and safety rules. (The reported audio itself is not transmitted with the report.)',
      },
      { sub: 'i. Microphone' },
      {
        p: 'Vault uses your device’s microphone only while you are actively recording a clip. Recordings are saved as described above.',
      },
      { sub: 'j. Diagnostic logs' },
      {
        p: 'Vault writes diagnostic messages to the device’s system log to help with troubleshooting. These stay on the device, are managed by iOS, and are not sent to us. They may include technical identifiers such as clip and iCloud record identifiers, but not the contents of your clips.',
      },
      { sub: 'k. Analytics' },
      {
        p: 'Vault includes an analytics framework, but it is turned off by default and currently collects nothing — no usage events are recorded, stored, or transmitted. If we ever enable analytics, we will update this Privacy Policy and the App Store privacy disclosures before doing so.',
      },
    ],
  },
  {
    heading: 'How we use information',
    blocks: [
      { p: 'We use the information above to:' },
      {
        list: [
          'provide core features — recording, importing, organizing, storing, syncing, and sharing clips;',
          'deliver shared clips to recipients and show who sent a clip;',
          'provide safety tools, including age gating, blocking, hiding, and reporting;',
          'protect Vault and its users by reviewing reports and enforcing a ban list for abusive content or senders; and',
          'diagnose and fix problems.',
        ],
      },
    ],
  },
  {
    heading: 'How information is shared',
    blocks: [
      {
        p: 'We do not sell your personal information and do not use it for advertising. Information is shared only in these limited ways:',
      },
      {
        list: [
          <><strong className="text-white/85">Apple (iCloud / CloudKit / iMessage):</strong> to store, sync, and share your clips and to deliver messages. This data is handled under Apple’s privacy policy.</>,
          <><strong className="text-white/85">People you share clips with:</strong> recipients receive the clips you send, along with your display name or Apple Account name as described above.</>,
          <><strong className="text-white/85">Formspree:</strong> receives the abuse reports you submit, so we can review them.</>,
          <><strong className="text-white/85">Legal and safety:</strong> we may disclose information if required by law or to protect the rights, safety, or property of Vault, our users, or the public.</>,
        ],
      },
    ],
  },
  {
    heading: 'Content moderation and bans',
    blocks: [
      {
        p: 'To keep Vault safe, we maintain a ban list. When a clip is opened, Vault checks whether the sender or the specific clip has been banned for abuse, and blocks playback if so. This check uses non‑content identifiers (a sender identifier and/or a clip identifier).',
      },
    ],
  },
  {
    heading: 'Data retention',
    blocks: [
      {
        list: [
          <><strong className="text-white/85">Clips on your device and in your private iCloud:</strong> kept until you delete them or remove the app. Deleting a clip removes it from your device and requests deletion of the corresponding iCloud record.</>,
          <><strong className="text-white/85">Shared clips:</strong> when you delete a clip, recipients lose access as their cached copy expires (within about 24 hours).</>,
          <><strong className="text-white/85">Reports:</strong> retained by us and Formspree as needed to review abuse and keep records of enforcement.</>,
          <><strong className="text-white/85">Age‑check result and preferences:</strong> kept on your device until you remove the app.</>,
        ],
      },
    ],
  },
  {
    heading: 'Your choices and rights',
    blocks: [
      {
        list: [
          <><strong className="text-white/85">Delete clips:</strong> delete any clip at any time within the app.</>,
          <><strong className="text-white/85">Clear your data:</strong> Settings includes options to delete your clips and clear Vault’s local data.</>,
          <><strong className="text-white/85">Manage iCloud:</strong> control Vault’s iCloud usage from your device’s iCloud settings; signing out of iCloud stops syncing.</>,
          <><strong className="text-white/85">Permissions:</strong> you can change microphone and Face ID permissions in the iOS Settings app at any time.</>,
          <><strong className="text-white/85">Blocking and reporting:</strong> block senders, hide clips, and report abusive content from within the app.</>,
        ],
      },
      {
        p: (
          <>
            Depending on where you live, you may have additional rights to access, correct, or
            delete personal information, or to object to certain processing. To make a request,
            contact us at <Mail to={CONTACT_EMAIL} />. Note that clip contents stored in your
            private iCloud are under your control and under Apple’s terms.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Children’s privacy',
    blocks: [
      {
        p: (
          <>
            Vault is not intended for children under 13, and we ask for your date of birth to
            enforce this. We do not knowingly collect personal information from children under 13.
            If you believe a child under 13 has used Vault, contact us at{' '}
            <Mail to={CONTACT_EMAIL} /> and we will take appropriate action.
          </>
        ),
      },
    ],
  },
  {
    heading: 'Security',
    blocks: [
      {
        p: 'Clips are stored within your device’s app sandbox and your private iCloud database, protected by your device and Apple Account security. App Lock adds optional Face ID/Touch ID protection. No method of storage or transmission is completely secure, but we work to protect your information using reasonable safeguards.',
      },
    ],
  },
  {
    heading: 'International users',
    blocks: [
      {
        p: 'Vault relies on Apple’s iCloud infrastructure and the Formspree service, which may process and store information in countries other than your own. By using Vault, you understand that your information may be processed in those locations in accordance with this policy.',
      },
    ],
  },
  {
    heading: 'Changes to this policy',
    blocks: [
      {
        p: 'We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above and, where appropriate, provide additional notice. Significant changes — such as enabling analytics — will be reflected here and in our App Store disclosures before they take effect.',
      },
    ],
  },
  {
    heading: 'Contact us',
    blocks: [
      { p: 'If you have questions or requests regarding this Privacy Policy or your information, contact us at:' },
      {
        p: (
          <>
            {COMPANY_LEGAL}
            <br />
            Email: <Mail to={CONTACT_EMAIL} />
            <br />
            Help Center: <A href="/support">coastlab.dev/support</A>
          </>
        ),
      },
    ],
  },
]

export default function Privacy() {
  return (
    <LegalPage
      title="Vault — Privacy Policy"
      updated="November 23, 2026"
      intro={[
        `Vault (“Vault,” “we,” “us,” or “our”) is a voice‑clip app developed by ${COMPANY_LEGAL} that lets you record, import, organize, and share short audio clips, including through an iMessage extension. This Privacy Policy explains what information Vault handles, how it is used, and the choices you have.`,
        'We designed Vault to keep your data on your own device and in your own private iCloud account wherever possible. Vault does not have its own user accounts, does not sell your data, and does not use your data for advertising.',
      ]}
      sections={sections}
      footer={<>See also the <A href="/terms">Vault Terms of Service</A>.</>}
    />
  )
}
