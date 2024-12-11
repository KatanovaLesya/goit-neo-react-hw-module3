import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/goit-neo-react-hw-module3/', // Встановлено коректно base
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Виправлено синтаксис
    }
  }
})
