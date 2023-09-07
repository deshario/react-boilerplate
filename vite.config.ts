import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
})
