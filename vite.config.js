/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { manualChunks } from './src/utils/manualChunks'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@components": path.resolve(__dirname, "./src/components/"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: manualChunks,
      },
    },
  },
  css: { modules: { localsConvention: "camelCaseOnly" } },
})
