// Config file needed for the setup of vitest 
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
  }
})
