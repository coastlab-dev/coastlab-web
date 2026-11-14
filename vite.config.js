import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Served from the root of the custom domain coastlab.dev, not a repo subpath
  base: '/',
  plugins: [react()],
})
