import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages for this repository: /adhd-mixing-site/
  base: process.env.VITE_BASE_URL ?? '/adhd-mixing-site/',
  plugins: [react()],
})
