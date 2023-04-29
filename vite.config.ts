import { defineConfig } from 'vite'

import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

import {
	BuildLib,
	BuildPlugins,
	rollupOptions,
} from './scripts/build'

export default defineConfig({
	plugins: [
		react(),
		Unocss({
			configFile: './uno.config.ts',
		}),
		...BuildPlugins(),
	],
	build: {
		outDir: 'dist',
		sourcemap: true,
		minify: 'esbuild',
		lib: {
			...BuildLib(),
		},
		rollupOptions: {
			...rollupOptions(),
		},
	},
})
