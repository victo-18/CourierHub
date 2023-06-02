import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { manualChunks } from './src/utils/manualChunks'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: manualChunks,
      },
    },
  },
  css: { modules: { localsConvention: "camelCaseOnly" } },
})
