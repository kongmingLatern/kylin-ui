import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'

import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
		react(),
		Unocss({
			configFile: './uno.config.ts',
		}),
		reactRefresh(),
		tsconfigPaths(),
		peerDepsExternal(),
		commonjs(),
		resolve(),
		json(),
	],
	build: {
		outDir: 'dist',
		sourcemap: true,
		minify: 'esbuild',

		lib: {
			entry: './packages/components/button/button.tsx',
			formats: ['es', 'umd', 'iife'],
			name: 'KylinUI',
			fileName: format => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
})
