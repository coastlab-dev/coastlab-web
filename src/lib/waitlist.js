import { WAITLIST } from '../config'

export function waitlistReady() {
  return /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(WAITLIST.endpoint)
}

// Where the visitor came from, so TikTok ad sign-ups can be told apart from
// organic ones. Reads ?utm_source / ?ref, e.g. coastlab.dev/waitlist?utm_source=tiktok
export function signupSource() {
  try {
    const q = new URLSearchParams(window.location.search)
    const parts = [q.get('utm_source') || q.get('ref'), q.get('utm_campaign'), q.get('utm_content')]
      .filter(Boolean)
      .map((s) => s.slice(0, 40))
    return parts.length ? parts.join(' / ') : 'direct'
  } catch {
    return 'direct'
  }
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Resolves { already } on success. Throws Error with a short, user-facing message otherwise.
// The body is form-encoded so the browser sends a "simple" request (no CORS preflight,
// which Apps Script can't answer). Apps Script replies through a redirect to
// googleusercontent.com, which allows any origin, so the JSON reply is readable.
export async function joinWaitlist(email, ageConfirmed) {
  if (!waitlistReady()) {
    throw new Error("The waitlist isn't open yet. Check back soon.")
  }
  const body = new URLSearchParams({
    email,
    age13: ageConfirmed ? 'yes' : 'no',
    source: signupSource(),
    page: 'coastlab.dev/waitlist',
  })
  let res
  try {
    res = await fetch(WAITLIST.endpoint, { method: 'POST', body, redirect: 'follow' })
  } catch {
    throw new Error("Couldn't reach the waitlist. Check your connection and try again.")
  }
  let data = null
  try {
    data = await res.json()
  } catch {
    /* non-JSON reply */
  }
  if (res.ok && data?.ok) return { already: Boolean(data.already) }
  if (data?.error === 'invalid_email') throw new Error('That email doesn’t look right.')
  if (data?.error === 'busy') throw new Error('Lots of people joining right now. Try again in a few seconds.')
  throw new Error('Something went wrong on our end. Try again in a moment.')
}
