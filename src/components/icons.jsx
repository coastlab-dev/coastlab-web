// Simple line icons (placeholders), inherit currentColor.
const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconRecord(p) {
  return (
    <svg {...base} {...p}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  )
}

export function IconSend(p) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12 20 4l-4 16-4-7-8-1Z" />
    </svg>
  )
}

export function IconPlay(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5V8.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconChat(p) {
  return (
    <svg {...base} {...p}>
      <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  )
}

export function IconBolt(p) {
  return (
    <svg {...base} {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  )
}

export function IconShield(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function IconFilm(p) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
    </svg>
  )
}

export function IconBookmark(p) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3h12v18l-6-4-6 4V3Z" />
    </svg>
  )
}

export function IconUsers(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6" />
      <path d="M18 14a6 6 0 0 1 3 5" />
    </svg>
  )
}
