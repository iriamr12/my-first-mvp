import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  proxy: {
  "/api": { //every request that starts with /api ==>send it to the http://localhost:5000
  target: "http://localhost:5000",
  changeOrigin: true,
  secure: false
  },
  },
  },
  })
