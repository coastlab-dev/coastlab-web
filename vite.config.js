import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Client-side routes from src/App.jsx. Keep this list in sync when adding pages.
// Nested routes (vault/waitlist) become dist/vault/waitlist.html. 'vault/index'
// makes /vault/ (trailing slash) load too, since a vault/ folder now exists.
// 'waitlist' is the old address; the app redirects it to /vault/waitlist.
const routes = ['vault', 'vault/index', 'vault/waitlist', 'support', 'privacy', 'terms', 'waitlist']

// Per-route <head> overrides, so links shared in iMessage / TikTok / Instagram
// preview with the right title, text and image. Crawlers don't run JS, so the
// tags must be in the HTML file itself.
const waitlistMeta = {
  title: 'Vault — join the waitlist',
  description: "Your group chat's inside jokes, saved. Save clips, send them back in one tap in iMessage, and share a vault with the crew.",
  image: 'https://coastlab.dev/brand/vault/og-waitlist.png',
  url: 'https://coastlab.dev/vault/waitlist',
}
const routeMeta = {
  'vault/waitlist': waitlistMeta,
  waitlist: waitlistMeta,
}

function withMeta(html, m) {
  const esc = (v) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:image" content="${esc(m.image)}" />`,
    `<meta property="og:url" content="${esc(m.url)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<link rel="canonical" href="${esc(m.url)}" />`,
    `<meta name="theme-color" content="#050507" />`,
  ].join('\n    ')
  return html
    .replace(/<title>.*?<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(m.description)}" />`)
    .replace('</head>', `    ${tags}\n  </head>`)
}

// GitHub Pages only serves real files, so a direct visit to /privacy would 404.
// Emit a copy of index.html per route (GitHub Pages serves /privacy from
// privacy.html with a 200), plus 404.html so unknown paths still load the app
// and render the NotFound page.
function githubPagesRoutes() {
  let outDir
  return {
    name: 'github-pages-routes',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const index = resolve(outDir, 'index.html')
      for (const route of [...routes, '404']) {
        const out = resolve(outDir, `${route}.html`)
        mkdirSync(dirname(out), { recursive: true })
        if (routeMeta[route]) writeFileSync(out, withMeta(readFileSync(index, 'utf8'), routeMeta[route]))
        else copyFileSync(index, out)
      }
    },
  }
}

export default defineConfig({
  // Served from the root of the custom domain coastlab.dev, not a repo subpath
  base: '/',
  plugins: [react(), githubPagesRoutes()],
})
