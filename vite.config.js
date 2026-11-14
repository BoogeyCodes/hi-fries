import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: '/' for local dev & root-domain hosts (Railway).
// Set VITE_BASE_PATH=/hi-fries/ if deploying under a GitHub Pages sub-path.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
})
