import { LibraryOptions, defineConfig } from 'vite'
import { loadKylinConfig } from './scripts/config'

import {
  BuildLib,
  BuildPlugins,
  rollupOptions,
} from './scripts/rollup/build.config'

import {
  presetUno,
  presetIcons,
  presetAttributify,
} from 'unocss'

import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import dts from 'vite-plugin-dts'

export default async () => {
  const kylinConfig = await loadKylinConfig()
  console.log('kylinConfig', kylinConfig)
  const dynamicSafelist = await import(
    './packages/preset/dynamicSafelist'
  )
  const safelist = dynamicSafelist.default(kylinConfig)

  return await defineConfig({
    plugins: [
      react(),
      Unocss({
        presets: [
          presetUno(),
          presetIcons(),
          presetAttributify(),
        ],
        shortcuts: {
          'j-a-c': 'justify-center items-center',
        },
        safelist: [
          // FLAG: 根据 开发者传入的 preset 进行 safelist 的配置
          ...safelist,
          'h-50px',
          'lh-50px',
          'text-white',
          'text-center',
        ],
      }),
      ...BuildPlugins(),
      // dts({
      //   outputDir: './dist/types',
      //   insertTypesEntry: true, // 插入TS 入口
      //   copyDtsFiles: true, // 是否将源码里的 .d.ts 文件复制到 outputDir
      // }),
    ],
    build: {
      outDir: 'dist',
      sourcemap: true,
      minify: 'esbuild',
      cssCodeSplit: true,
      lib: {
        ...BuildLib(),
      } as LibraryOptions,
      rollupOptions: {
        ...rollupOptions(),
      },
    },
    define: {
      'process.env.KYLIN_CONFIG':
        JSON.stringify(kylinConfig),
    },
    resolve: {
      alias: {
        '@': path.resolve(path.resolve(), '/src'),
        '@packages': path.resolve(
          path.resolve(),
          '/packages'
        ),
        '@components': path.resolve(
          path.resolve(),
          '/packages/components/'
        ),
        '@shared': path.resolve(
          path.resolve(),
          '/packages/shared/'
        ),
        '@hooks': path.resolve(
          path.resolve(),
          '/packages/hooks/'
        ),
        '@preset': path.resolve(
          path.resolve(),
          '/packages/preset/'
        ),
        '@icon': path.resolve(
          path.resolve(),
          '/packages/icon/'
        ),
      },
    },
  })
}
