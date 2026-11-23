import LegalPage, { Mail, A } from '../components/LegalPage'
import { CONTACT_EMAIL } from '../config'

const B = ({ children }) => <strong className="text-white/85">{children}</strong>

const sections = [
  {
    heading: 'Eligibility and age requirement',
    blocks: [
      { p: 'You must be at least 13 years old to use Vault. When you first open Vault, its iMessage app, or its Share extension, we ask for your date of birth. Vault uses it only to check your age. It saves a pass or fail result on your device and does not keep your date of birth. If you are under 13, Vault will not be available to you. Do not enter a false date of birth to get around this check.' },
      { p: 'If you are under the age of majority where you live, a parent or legal guardian must review and agree to these Terms for you. Some countries set a higher minimum age for using online services. If you live in one of them, you must meet that age.' },
      { p: 'You may not use Vault if you are barred from using it under applicable law, or if we have previously terminated your access.' },
    ],
  },
  {
    heading: 'What Vault does',
    blocks: [
      { p: 'Vault is a personal library of short audio clips that you can send in Apple’s Messages app. Depending on your version of the App, Vault lets you:' },
      {
        list: [
          <><B>Record</B> clips with your device’s microphone, including by starting a recording through Siri or the Shortcuts app.</>,
          <><B>Import</B> audio from the Files app, from recordings you save out of Voice Memos, and from other apps through the iOS Share sheet (“Vault Share”).</>,
          <><B>Extract audio from videos</B> you choose from your photo library.</>,
          <><B>Trim, name, rename, and edit</B> clips, mark clips as favorites, search your library, and see clips you have recently sent.</>,
          <><B>Send clips in iMessage</B> through the Vault iMessage app. You can also play clips other people send you, save them to your own Vault, and send them again.</>,
          <><B>Set a display name</B>, which is shown to the people who receive your clips.</>,
          <><B>Keep yourself safe</B> by reporting clips, blocking senders, and hiding individual clips.</>,
          <><B>Protect the App</B> with App Lock, which uses Face ID, Touch ID, or your device passcode.</>,
          <><B>Back up and sync</B> your clips, block list, and related data through your iCloud account.</>,
        ],
      },
      { p: 'Vault is for personal, non-commercial use. It is not designed for storing sensitive, confidential, or critical recordings, and you should not rely on it as your only copy of anything important.' },
    ],
  },
  {
    heading: 'iCloud, Apple services, and your account',
    blocks: [
      { p: 'Vault does not ask you to create a separate Vault account. It works through your Apple ID and iCloud account:' },
      {
        list: [
          <><B>Storage.</B> Your clips are saved on your device and uploaded to a private area of your own iCloud account. Uploaded clips count toward your iCloud storage. If your iCloud storage is full or you are not signed in to iCloud, some features, including sending clips, may not work.</>,
          <><B>Apple’s terms apply.</B> Your use of iCloud, iMessage, Siri, Shortcuts, Face ID, Touch ID, and other Apple services is governed by your agreements with Apple. We do not control those services and are not responsible for their availability, security, or performance.</>,
          <><B>Your Apple identity.</B> When you send a clip, iCloud gives Vault an identifier for you as the sender. Vault uses it so recipients can block you and so reports can identify the sender. Depending on your iCloud settings, recipients may also see the name associated with your Apple ID.</>,
          <><B>Your responsibility.</B> You are responsible for keeping your device, Apple ID, and passcode secure, and for all activity in Vault on your device.</>,
        ],
      },
    ],
  },
  {
    heading: 'Your content',
    blocks: [
      { sub: '4.1 You own your clips' },
      { p: '“Your Content” means the audio, clip names, display name, and report descriptions that you record, import, create, or submit in Vault. You keep whatever ownership rights you have in Your Content. We do not claim ownership of it.' },
      { sub: '4.2 The permission you give us' },
      { p: 'Vault needs some permissions from you to work. You grant CoastLab a worldwide, non-exclusive, royalty-free license to host, store, copy, process, transmit, and display Your Content. This license is only for operating, providing, securing, and improving Vault, and for enforcing these Terms. For example, it covers processing audio so Vault can trim it, delivering a clip to the people you send it to, and reviewing a clip that has been reported. The license ends when Your Content is deleted from Vault and our systems, except for copies other users have saved, copies kept in backups for a limited time, and copies we must keep for legal or safety reasons.' },
      { sub: '4.3 Your promises about your content' },
      { p: 'You represent and warrant that:' },
      {
        list: [
          'you own Your Content or have all the rights, licenses, and permissions needed to record, import, store, and send it through Vault;',
          'if Your Content includes another person’s voice, you have their consent where the law requires it, including any consent needed to record a conversation; and',
          'Your Content does not violate these Terms or any law, and does not infringe anyone’s rights, including copyright, trademark, privacy, and publicity rights.',
        ],
      },
      { sub: '4.4 Audio from songs, videos, and other sources' },
      { p: 'Vault lets you extract audio from videos and import audio files. Being able to do this does not mean you have the right to share that audio. Clips from songs, movies, TV shows, games, podcasts, and other copyrighted works may be protected, and sending them to others may require the rights holder’s permission. You are solely responsible for making sure your use is lawful.' },
      { sub: '4.5 Keep your own copies' },
      { p: 'We are not responsible for lost, corrupted, or deleted content, including content lost when iCloud is unavailable, when you delete the App, or when you clear your data. Keep your own copies of anything you want to keep.' },
    ],
  },
  {
    heading: 'Sending and receiving clips',
    blocks: [
      { sub: '5.1 How sending works' },
      { p: <>When you send a clip in iMessage, Vault creates a read-only iCloud share link for that clip and places it in a message bubble. The bubble may also include the clip’s name, its length, and your display name. <B>Anyone who has the link can play the clip.</B> That includes everyone in the conversation and anyone they forward the message to. Only send clips you are comfortable having shared beyond the person you sent them to.</> },
      { p: 'In some cases, such as when your iCloud storage is full, Vault may send the clip as a standard audio file attachment instead. An attachment is delivered and stored by Messages, not by Vault. Deleting the clip in Vault does not delete the attachment, and Vault’s reporting, blocking, and hiding tools may not apply to it.' },
      { sub: '5.2 What recipients can do' },
      { p: 'Recipients with Vault can play your clip, save a copy to their own Vault, and send it to others. You give every person who receives your clip a non-exclusive, royalty-free license to play, save, and re-send it through Vault and Messages for their personal, non-commercial use.' },
      { sub: '5.3 Deleting a sent clip' },
      { p: <>If you delete a clip you have sent, Vault removes it from your iCloud. Recipients’ devices may keep a cached copy for up to about 24 hours before they find out it is gone. Deleting a clip does <B>not</B> remove copies recipients have already saved to their own Vault, copies sent as file attachments, or recordings made by other means. Once you send something, you may not be able to take it back.</> },
      { sub: '5.4 Clips you receive' },
      { p: 'Clips from other people belong to them, and they are responsible for them. We do not screen clips before they are sent and do not endorse any user content. If you save a clip someone sent you, you must use it in a way that respects these Terms and the sender’s rights. If you come across something objectionable, you can report it, block the sender, or hide the clip (see Section 7).' },
    ],
  },
  {
    heading: 'Community rules',
    blocks: [
      { p: 'You agree not to use Vault to record, import, send, or save any content, or to take any action, that:' },
      {
        olist: [
          'is illegal, or promotes or helps with illegal activity;',
          'sexually exploits or endangers minors in any way. We report apparent child sexual exploitation material to the appropriate authorities;',
          'is sexually explicit or pornographic;',
          'threatens, harasses, bullies, intimidates, stalks, or abuses anyone, or encourages others to do so;',
          'promotes violence, terrorism, or violent extremism, or attacks people on the basis of race, ethnicity, national origin, religion, disability, sex, gender identity, sexual orientation, age, or another protected characteristic;',
          'promotes or glorifies self-harm, suicide, or eating disorders;',
          'was recorded without the consent the law requires, or reveals another person’s private or confidential information, such as their address, financial details, or intimate content;',
          'impersonates any person or organization, or uses AI-generated or altered audio to deceive people about who is speaking or what they said;',
          'infringes anyone’s copyright, trademark, or other intellectual property, privacy, or publicity rights;',
          'is spam, unsolicited advertising, a scam, phishing, or misleading content;',
          'is designed to damage hearing or startle people, for example audio at painful volumes or deliberately distressing sounds sent to someone who did not expect them;',
          'tries to get around a block, a content removal, a report limit, the age check, or any other safety or security feature;',
          'involves reverse engineering, decompiling, or interfering with Vault, its iCloud data, or the networks it uses, or using bots, scripts, or other automated means to access Vault, except where the law expressly allows it; or',
          'breaks Apple’s terms, including the rules for iCloud and iMessage.',
        ],
      },
    ],
  },
  {
    heading: 'Reporting, blocking, and moderation',
    blocks: [
      { sub: '7.1 Tools you can use' },
      {
        list: [
          <><B>Report a clip.</B> When you report a clip, Vault sends us the clip’s name, the clip’s identifier, the sender’s identifier, the time of the report, and the description you write. We use this to review the report. To prevent abuse, Vault lets you report a given clip only once and limits how often you can submit reports. We may review reported content and related information.</>,
          <><B>Block a user.</B> Blocking a sender stops their clips from playing for you in Vault. Your block list is stored in your private iCloud so it can apply across your devices. You can unblock people in Settings. Blocking does not stop someone from messaging you in Messages. To do that, use Apple’s blocking tools.</>,
          <><B>Hide a clip.</B> Hiding a clip stops that one clip from playing for you on that device. You can unhide clips in Settings.</>,
        ],
      },
      { sub: '7.2 What we may do' },
      { p: 'We aim to review reports promptly, usually within about 24 hours, but we cannot guarantee a response time or a particular outcome. We are not obligated to monitor content. If we believe content or behavior breaks these Terms or the law, or puts anyone at risk, we may at our discretion and without notice:' },
      {
        list: [
          'prevent a specific clip from playing for any Vault user;',
          'prevent all clips from a specific sender from playing;',
          'suspend or end your access to Vault; or',
          'keep relevant information, and share it with law enforcement or other authorities where we believe the law requires it or where it is needed to protect someone’s safety.',
        ],
      },
      { p: 'Submitting false or abusive reports is itself a violation of these Terms.' },
    ],
  },
  {
    heading: 'Copyright complaints',
    blocks: [
      { p: 'We respect intellectual property rights. If you believe content shared through Vault infringes your copyright, send us a notice at the address in Section 26 with:' },
      {
        olist: [
          'your physical or electronic signature;',
          'a description of the copyrighted work you believe has been infringed;',
          'enough information for us to find the content, such as the clip name, the sender’s display name, the date you received it, and a screenshot;',
          'your name, address, phone number, and email address;',
          'a statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or the law; and',
          'a statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on the owner’s behalf.',
        ],
      },
      { p: 'If we remove content in response to a notice, the person who sent it may submit a counter-notice as allowed by law. We may end access for users who repeatedly infringe.' },
    ],
  },
  {
    heading: 'Privacy and device permissions',
    blocks: [
      { p: <>Our <A href="/privacy">Privacy Policy</A> explains what information Vault handles and how. It is part of these Terms. In short:</> },
      {
        list: [
          <><B>Microphone.</B> Vault uses the microphone only when you choose to record.</>,
          <><B>Photos and files.</B> Vault reads only the videos, audio files, and shared items you choose.</>,
          <><B>Face ID or Touch ID.</B> If you turn on App Lock, iOS confirms your identity. Vault never receives your biometric data.</>,
          <><B>Analytics.</B> If we add usage analytics in a future version, we will update our Privacy Policy and Apple’s App Store privacy disclosures before collecting that data.</>,
        ],
      },
      { p: 'You can change Vault’s access to the microphone, Photos, Face ID, and other permissions at any time in your device’s Settings. Some features will not work without them.' },
    ],
  },
  {
    heading: 'App Lock and security',
    blocks: [
      { p: 'App Lock asks for Face ID, Touch ID, or your device passcode when you open the Vault app. It is a convenience feature and does not guarantee that no one else can access your clips. For example, anyone who knows your device passcode can unlock it, and clips you have sent stay playable by their recipients. No method of storage or transmission is completely secure, and we cannot guarantee the security of your data.' },
    ],
  },
  {
    heading: 'Deleting your data',
    blocks: [
      { p: 'You can delete individual clips at any time. In Settings, Vault also offers:' },
      {
        list: [
          <><B>Clear Vault</B>, which removes all clips from your device but keeps your iCloud backup.</>,
          <><B>Delete All Data</B>, which permanently deletes all your clips from your device and from Vault’s area of your iCloud. This cannot be undone.</>,
        ],
      },
      { p: 'Deleting the App from your device may not delete data stored in your iCloud. You can also manage or delete Vault’s iCloud data in your device’s iCloud settings. As explained in Section 5.3, deleting your data does not remove copies others have already saved.' },
    ],
  },
  {
    heading: 'Limits, changes, and availability',
    blocks: [
      { p: 'Vault may set limits on how it is used. For example, it may limit how many clips you can store (currently 20), how long a clip can be (currently 15 seconds), what file types it accepts, and how often you can submit reports. We may change these limits.' },
      { p: 'We may add, change, or remove features, or discontinue Vault entirely, at any time. Vault depends on Apple services and on your device, operating system, and network connection, so it may sometimes be unavailable, slow, or not work as expected. We do not guarantee that Vault will always be available or that any particular feature will remain available.' },
      { p: 'We may release updates. Some updates may be required to keep using Vault. Updates are covered by these Terms unless they come with their own terms.' },
    ],
  },
  {
    heading: 'Paid features',
    blocks: [
      { p: 'Vault is currently free. If we offer paid features or subscriptions in the future, they will be sold through Apple’s App Store. Apple’s payment, renewal, cancellation, and refund policies will apply, and any additional terms will be shown before you buy. Refund requests are handled by Apple.' },
    ],
  },
  {
    heading: 'Your license to use Vault',
    blocks: [
      { p: 'As long as you follow these Terms, CoastLab grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to download and use Vault on Apple-branded devices that you own or control. You may use it only for your personal, non-commercial purposes, and only as permitted by Apple’s Usage Rules in the App Store Terms of Service. You may not copy, modify, distribute, sell, rent, lease, or create derivative works of Vault, or remove any proprietary notices from it.' },
    ],
  },
  {
    heading: 'Our intellectual property',
    blocks: [
      { p: 'Vault, including its software, design, logos, the Vault name, animations, and other content we provide, belongs to CoastLab or our licensors and is protected by intellectual property laws. Fonts and other third-party materials included in Vault are used under their own licenses. These Terms do not give you any right to use our names, logos, or trademarks.' },
    ],
  },
  {
    heading: 'Feedback',
    blocks: [
      { p: 'If you send us ideas, suggestions, or other feedback about Vault, we may use it however we like without any obligation to you.' },
    ],
  },
  {
    heading: 'Third-party services',
    blocks: [
      { p: 'Vault works with, or links to, services we do not control. These include Apple’s services, the form-processing service we use to receive reports, App Store pages for rating and sharing Vault, and the websites that host our policies and help pages. Your use of those services is governed by their own terms and privacy policies. We are not responsible for them.' },
    ],
  },
  {
    heading: 'Apple App Store terms',
    blocks: [
      { p: 'If you downloaded Vault from Apple’s App Store, you and we agree that:' },
      {
        olist: [
          <><B>Acknowledgement.</B> These Terms are between you and CoastLab only, not Apple. CoastLab, not Apple, is solely responsible for Vault and its content.</>,
          <><B>Scope of license.</B> Your license to use Vault is limited to using it on Apple-branded products that you own or control, as permitted by the Usage Rules in the App Store Terms of Service. Vault may also be accessed by other accounts associated with you through Family Sharing or volume purchasing.</>,
          <><B>Maintenance and support.</B> CoastLab is solely responsible for providing any maintenance and support for Vault. Apple has no obligation to provide maintenance or support services for Vault.</>,
          <><B>Warranty.</B> CoastLab is solely responsible for any product warranties, whether express or implied by law, to the extent they have not been effectively disclaimed. If Vault fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any, to you. To the maximum extent permitted by law, Apple has no other warranty obligation for Vault. Any other claims, losses, liabilities, damages, costs, or expenses caused by a failure to conform to a warranty are CoastLab’s responsibility.</>,
          <><B>Product claims.</B> CoastLab, not Apple, is responsible for addressing any claims by you or a third party relating to Vault or your possession and use of it. These include (a) product liability claims; (b) claims that Vault fails to conform to any applicable legal or regulatory requirement; and (c) claims under consumer protection, privacy, or similar laws.</>,
          <><B>Intellectual property claims.</B> If a third party claims that Vault, or your possession and use of it, infringes their intellectual property rights, CoastLab, not Apple, is solely responsible for investigating, defending, settling, and discharging that claim.</>,
          <><B>Legal compliance.</B> You represent and warrant that (a) you are not located in a country that is subject to a U.S. Government embargo or that the U.S. Government has designated as a “terrorist supporting” country; and (b) you are not on any U.S. Government list of prohibited or restricted parties.</>,
          <><B>Developer contact.</B> Questions, complaints, or claims about Vault should be sent to CoastLab using the contact information in Section 26.</>,
          <><B>Third-party terms.</B> You must comply with the terms of any third-party agreements that apply when you use Vault, such as your wireless data service agreement.</>,
          <><B>Third-party beneficiary.</B> Apple and its subsidiaries are third-party beneficiaries of these Terms. Once you accept these Terms, Apple will have the right, and will be deemed to have accepted the right, to enforce these Terms against you as a third-party beneficiary.</>,
        ],
      },
    ],
  },
  {
    heading: 'Ending your use',
    blocks: [
      { p: 'You can stop using Vault at any time by deleting the App and, if you wish, deleting its data as described in Section 11.' },
      { p: 'We may suspend or end your access to Vault at any time, with or without notice, if we reasonably believe you have broken these Terms, if required by law, or to protect Vault, our users, or others. When your access ends, your license to use Vault ends too. Sections 4.2 (as it applies to content already shared), 4.3, 5.2, 5.3, and 15 through 25 survive, along with any other terms that by their nature should survive.' },
    ],
  },
  {
    heading: 'Disclaimers',
    blocks: [
      { caps: 'To the fullest extent permitted by law, Vault is provided “as is” and “as available,” without warranties of any kind, whether express, implied, or statutory. These include implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that Vault will be uninterrupted, timely, secure, or error-free, that clips will be stored, synced, delivered, or played successfully, that content will not be lost, or that defects will be corrected. We are not responsible for content sent by other users.' },
      { p: 'Some jurisdictions do not allow certain warranties to be disclaimed, so some of the above may not apply to you.' },
    ],
  },
  {
    heading: 'Limitation of liability',
    blocks: [
      { caps: 'To the fullest extent permitted by law, CoastLab and its owners, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages. Nor will they be liable for any loss of data, content, profits, revenue, goodwill, or use, arising out of or relating to Vault or these Terms. This applies whatever the theory of liability and even if we have been told such damages are possible. Our total liability for all claims relating to Vault or these Terms will not exceed the greater of (a) the amount you paid us for Vault in the 12 months before the claim, or (b) fifty U.S. dollars (US $50).' },
      { p: 'Some jurisdictions do not allow these limitations, so some of them may not apply to you. Nothing in these Terms limits liability that cannot be limited by law.' },
    ],
  },
  {
    heading: 'Indemnification',
    blocks: [
      { p: 'To the extent permitted by law, you agree to defend, indemnify, and hold harmless CoastLab and its owners, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys’ fees) arising out of (a) Your Content; (b) your use or misuse of Vault; or (c) your breach of these Terms or violation of any law or the rights of any third party.' },
    ],
  },
  {
    heading: 'Governing law and disputes',
    blocks: [
      { p: 'These Terms are governed by the laws of the state in which CoastLab Development LLC is organized, United States, without regard to its conflict-of-law rules. Before filing any claim, you agree to contact us first and try in good faith to resolve the dispute informally for at least 30 days. Except where the law of your place of residence requires otherwise, any legal action relating to Vault or these Terms must be brought in the state or federal courts located in the county of CoastLab Development LLC’s principal place of business, and you and we consent to the jurisdiction of those courts. Either party may bring a qualifying claim in small claims court.' },
      { p: 'If you live in the European Union, the United Kingdom, or another place whose consumer protection laws give you rights that cannot be waived by contract, nothing in these Terms takes those rights away.' },
    ],
  },
  {
    heading: 'General terms',
    blocks: [
      {
        list: [
          <><B>Entire agreement.</B> These Terms and our Privacy Policy are the entire agreement between you and us about Vault.</>,
          <><B>Severability.</B> If any part of these Terms is found unenforceable, the rest stays in effect.</>,
          <><B>No waiver.</B> If we do not enforce a right, we have not waived it.</>,
          <><B>Assignment.</B> You may not transfer these Terms without our consent. We may transfer them, for example as part of a merger or sale of assets.</>,
          <><B>Events beyond our control.</B> We are not responsible for failures caused by events beyond our reasonable control, such as outages of Apple’s services.</>,
          <><B>Export.</B> You agree to comply with all applicable export and sanctions laws.</>,
          <><B>Language.</B> If these Terms are translated, the English version controls.</>,
        ],
      },
    ],
  },
  {
    heading: 'Changes to these Terms',
    blocks: [
      { p: 'We may update these Terms from time to time. When we do, we will change the “Last updated” date above. If a change is material, we will give reasonable notice, for example in the App or on this page. If you keep using Vault after the changes take effect, you accept the updated Terms. If you do not agree, stop using Vault.' },
    ],
  },
  {
    heading: 'Contact us',
    blocks: [
      { p: 'For questions, support, reports, copyright notices, or legal notices, contact:' },
      { p: <>CoastLab Development LLC<br />Email: <Mail to={CONTACT_EMAIL} /></> },
      { p: <>You can also reach support from Vault under <B>Settings → Contact Support</B>.</> },
    ],
  },
]

export default function Terms() {
  return (
    <LegalPage
      title="Vault Terms of Service"
      updated="November 23, 2026"
      intro={[
        <>These Terms of Service (“<B>Terms</B>”) are an agreement between you and CoastLab Development LLC (“<B>CoastLab</B>,” “<B>we</B>,” “<B>us</B>,” or “<B>our</B>”). They cover your use of the Vault mobile application, its iMessage app, its Share extension, its Siri and Shortcuts actions, and any related websites, features, and support (together, the “<B>App</B>” or “<B>Vault</B>”).</>,
        <>By downloading, opening, or using Vault, you agree to these Terms and to our <A href="/privacy">Privacy Policy</A>. If you do not agree, do not use Vault.</>,
      ]}
      summary={{
        title: 'The short version',
        items: [
          'You must be at least 13 years old to use Vault.',
          'Vault lets you save short voice and audio clips and send them in iMessage. Your clips are stored on your device and in your own iCloud account. We do not run our own servers to store them.',
          'You own your clips. You are responsible for what you record, import, and send, including having the rights to any audio you take from songs, videos, or other people.',
          'When you send a clip, anyone who has the link can play it and save a copy. Deleting a clip later does not remove copies other people have already saved.',
          'You can report clips and block people. We may remove content or restrict senders who break these Terms.',
          'Vault is provided “as is.” Our liability is limited as far as the law allows.',
        ],
        note: 'This summary is for convenience only. The full Terms below are what apply.',
      }}
      toc
      sections={sections}
    />
  )
}
