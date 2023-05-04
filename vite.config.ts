import { LibraryOptions, defineConfig } from 'vite'

import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

import dts from 'vite-plugin-dts'

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
    dts({
      outputDir: './dist/types',
      insertTypesEntry: false, // 插入TS 入口
      copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
    }),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    lib: {
      ...BuildLib(),
    } as LibraryOptions,
    rollupOptions: {
      ...rollupOptions(),
    },
  },
})
