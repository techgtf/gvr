import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  // base: '/great-value-1/',
  plugins: [react()],
  resolve: {
    alias: {
      frontend: path.resolve(__dirname, 'src/frontend'),
      admin: path.resolve(__dirname, 'src/admin'),
      common: path.resolve(__dirname, 'src/common'),
      root: path.resolve(__dirname, 'src/'),
    },
  },
})
