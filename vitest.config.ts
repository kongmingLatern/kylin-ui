import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
export default defineConfig({
  base: './',
  test: {
    globals: true,
    environment: 'jsdom',
    threads: false
  },
  resolve: {
    alias: {
      'components': resolve(__dirname, 'packages/components')
    }
  },
})
