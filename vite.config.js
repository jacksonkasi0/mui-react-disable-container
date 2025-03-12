import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-jacksonkasi-muireactdis-jjcln2ojgxm.ws-us118.gitpod.io'],
  },
});

