import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

export function BuildPlugins() {
  return [
    reactRefresh(),
    // tsconfigPaths(),
    peerDepsExternal(),
    commonjs(),
    resolve(),
    json(),
  ]
}

export function BuildLib() {
  return {
    entry: 'packages/components/index.ts',
    formats: ['es', 'umd', 'iife'],
    name: 'KylinUI',
    fileName: format => `index.${format}.js`,
  }
}

export function rollupOptions() {
  return {
    external: ['react', 'react-dom'],
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  }
}
