import fs from 'fs-extra'
import path from 'path'
import config from '../vite.config'
import {
  build,
  InlineConfig,
  defineConfig,
  UserConfig,
} from 'vite'

console.log('config', config)

const buildAll = async () => {
  // 全量打包
  await build(
    defineConfig(config as UserConfig) as InlineConfig
  )
  const __dirname = path.resolve()

  const componentSrc = path.resolve(
    __dirname,
    './packages/components'
  )

  const object = fs
    .readdirSync(componentSrc)
    .filter(name => {
      // 只要目录不要文件，且里面包含index.ts
      console.log('name', name)

      const componentDir = path.resolve(componentSrc, name)
      const isDir = fs.lstatSync(componentDir).isDirectory()
      return (
        isDir &&
        fs.readdirSync(componentDir).includes('index.tsx')
      )
    })

  console.log('object', object)

  for (const name of object) {
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

    console.log('custom', custom)

    Object.assign((config as any).build, custom)
    await build(
      defineConfig(config as UserConfig) as InlineConfig
    )

    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
          "name": "kylin-ui/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js",
        }`,
      `utf-8`
    )
  }
}

buildAll()
