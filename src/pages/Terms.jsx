import LegalPage from '../components/LegalPage'

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="Placeholder"
      intro="These Terms & Conditions govern your use of products by CoastLab Development. This is placeholder copy pending final review."
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: 'Placeholder. By using our products, you agree to these terms. This section will describe how acceptance works and who these terms apply to.',
        },
        {
          heading: 'Use of the App',
          body: 'Placeholder. This section will describe acceptable use, requirements (such as a compatible Apple device and iMessage), and any restrictions.',
        },
        {
          heading: 'Intellectual Property',
          body: 'Placeholder. This section will describe ownership of the app, its content, trademarks, and the license granted to users.',
        },
        {
          heading: 'Limitation of Liability',
          body: 'Placeholder. This section will describe the limits of CoastLab Development\'s liability to the extent permitted by law.',
        },
        {
          heading: 'Changes to Terms',
          body: 'Placeholder. This section will describe how and when these terms may be updated, and how users will be notified.',
        },
        {
          heading: 'Contact',
          body: 'Placeholder. Questions about these terms can be directed to the contact email below. Final legal copy will reference CoastLab Development LLC once the entity is formed.',
        },
      ]}
    />
  )
}
