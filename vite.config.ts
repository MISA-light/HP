import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://misa-light.github.io/HP/
export default defineConfig({
  plugins: [react()],
  base: '/HP/',
})
