import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so dist/ can be uploaded to any folder or CDN
export default defineConfig({ plugins: [react()], base: './', build: { outDir: 'dist' } })
