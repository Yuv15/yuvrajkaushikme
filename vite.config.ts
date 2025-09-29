// vite.config.ts (Corrected for Stable Tailwind)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// DELETE: import tailwindcss from '@tailwindcss/vite'
import path from 'path' 

export default defineConfig({
  base: '/iyuvrajkaushik/',
  // DELETE 'tailwindcss' from the plugins array
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
  },
  // No further configuration needed here; PostCSS handles the rest.
})
