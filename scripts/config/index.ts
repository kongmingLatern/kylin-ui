// export async function resolveConfig() {
//   // 1. 读取配置文件的路径
//   const configPath = getUserConfigPath()
//   // 2. 读取配置文件的内容
//   const config = await import(configPath)

//   return config
// }

// function getUserConfigPath() {
//   const supportFile = ['kylin.config.js', 'kylin.config.ts']

//   const configPath = supportFile.find(file => {
//     return fs.existsSync(path.resolve(file))
//   })

//   if (!configPath) {
//     throw new Error('Failed to find config file')
//   } else {
//     return path.resolve(configPath)
//   }
// }
// loadKylinConfig.ts
// import { UserConfig } from '../../packages/shared'
import path from 'path'
import * as fs from 'fs-extra'

export function loadKylinConfig() {
  const configPath = path.resolve(
    process.cwd(),
    'kylin.config.ts'
  )

  if (fs.existsSync(configPath)) {
    const configModule = require(configPath)
    return configModule.default || configModule
  }
  return {}
}
