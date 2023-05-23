import path from 'path'
import fs from 'fs'

export async function loadKylinConfig() {
  const configPath = path.resolve(
    process.cwd(),
    'kylin.config.js'
  )

  if (fs.existsSync(configPath)) {
    const configModule = await import(configPath)
    return configModule.default || configModule
  }
  return {}
}
