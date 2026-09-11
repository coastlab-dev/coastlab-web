// Placeholder App Store badge — non-functional (app not live yet).
export default function AppStoreBadge() {
  return (
    <div
      className="inline-flex items-center gap-3 rounded-xl border border-line bg-black/60 px-5 py-3 opacity-70 cursor-not-allowed select-none"
      aria-disabled="true"
      title="Coming soon to the App Store"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M16.36 12.9c-.02-2.13 1.74-3.15 1.82-3.2-1-1.46-2.54-1.66-3.09-1.68-1.31-.13-2.56.77-3.23.77-.66 0-1.69-.75-2.78-.73-1.43.02-2.75.83-3.48 2.11-1.48 2.57-.38 6.38 1.06 8.47.7 1.02 1.54 2.17 2.63 2.13 1.06-.04 1.46-.68 2.74-.68 1.27 0 1.64.68 2.76.66 1.14-.02 1.86-1.04 2.56-2.07.81-1.19 1.14-2.34 1.16-2.4-.03-.01-2.22-.85-2.24-3.38ZM14.3 6.63c.58-.71.98-1.69.87-2.67-.84.03-1.86.56-2.46 1.26-.54.62-1.01 1.62-.88 2.57.94.07 1.9-.48 2.47-1.16Z" />
      </svg>
      <div className="leading-tight text-left">
        <div className="text-[10px] uppercase tracking-wide text-white/60">Coming soon on the</div>
        <div className="text-lg text-white -mt-0.5">App Store</div>
      </div>
    </div>
  )
}
