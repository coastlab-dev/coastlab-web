import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Client-side routes from src/App.jsx. Keep this list in sync when adding pages.
const routes = ['vault', 'support', 'privacy', 'terms']

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
        copyFileSync(index, resolve(outDir, `${route}.html`))
      }
    },
  }
}

export default defineConfig({
  // Served from the root of the custom domain coastlab.dev, not a repo subpath
  base: '/',
  plugins: [react(), githubPagesRoutes()],
})
