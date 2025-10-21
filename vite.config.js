import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://reflexoperu-v3.marketingmedico.vip/backend/public',
        changeOrigin: true,
        secure: false, // ignora certificado SSL si no es válido
      },
    },
  },
})
