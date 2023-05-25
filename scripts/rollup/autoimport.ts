import fs from 'fs-extra'
import path from 'path'
import {
  build,
  InlineConfig,
  defineConfig,
  UserConfig,
} from 'vite'

const buildAll = async () => {
  // 全量打包
  const config = await import('../../vite.config')
  await build(
    defineConfig(config as UserConfig) as InlineConfig
  )
  const __dirname = path.resolve()

  const componentSrc = path.resolve(
    __dirname,
    './packages/components'
  )

  const componentNameList = fs
    .readdirSync(componentSrc)
    .filter(name => {
      const componentDir = path.resolve(componentSrc, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return (
        isDir &&
        fs.readdirSync(componentDir).includes('index.tsx')
      )
    })

  for (const name of componentNameList) {
    const outDir = path.resolve(__dirname, './dist', name)
    const custom = {
      lib: {
        entry: `${path.resolve(
          componentSrc,
          name
        )}/index.tsx`,
        name, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    }

    // 获取默认配置
    const defaultConfig = await config.default()

    // 合并 custom 配置到 config.build 中
    const mergedConfig = {
      ...defaultConfig,
      build: {
        ...(defaultConfig as any).build,
        ...custom,
      },
    }

    // 调用 build 函数，传入合并后的配置
    await build(defineConfig(mergedConfig) as InlineConfig)

    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
          "name": "kylin-ui/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
      `utf-8`
    )
  }
}

buildAll()
