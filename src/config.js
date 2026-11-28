// Central config — swap real values here as they become available.
export const CONTACT_EMAIL = 'contact@coastlab.dev'
export const COMPANY = 'CoastLab Development'
export const COMPANY_LEGAL = 'CoastLab Development LLC'

// Vault waitlist (coastlab.dev/vault/waitlist).
// Sign-ups go to a Google Sheet through a Google Apps Script web app.
// Setup: see waitlist/README.md. Paste the web app URL (ends in /exec) below.
// Until it is set, the form says the waitlist isn't open yet instead of
// pretending to save the email.
export const WAITLIST = {
  endpoint: '',
  // Shown in the Privacy Policy as the service that stores waitlist emails.
  providerName: 'Google',
  // Public URL people share with their group chat.
  shareUrl: 'https://coastlab.dev/vault/waitlist',
}
