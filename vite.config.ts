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
import { dynamicSafelistPlugin } from './scripts/unocss/dynamicSafelistPlugin'

import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'

import dts from 'vite-plugin-dts'

export default async () => {
  const kylinConfig = await loadKylinConfig()

  return await defineConfig({
    plugins: [
      react(),
      Unocss({
        presets: [
          presetUno(),
          presetIcons(),
          presetAttributify(),
        ],
        safelist: [
          // FLAG: 根据 开发者传入的 preset 进行 safelist 的配置
          ...dynamicSafelistPlugin(kylinConfig),
        ],
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
    define: {
      'process.env.KYLIN_CONFIG':
        JSON.stringify(kylinConfig),
    },
    resolve: {
      alias: {
        '@': '/src',
        '@packages': '/packages',
        '@components': '/packages/components/',
        '@shared': '/packages/shared',
        '@preset': '/packages/preset',
        '@icon': '/packages/icons',
      },
    },
  })
}
