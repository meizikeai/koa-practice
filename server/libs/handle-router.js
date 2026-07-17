// server/libs/handle-router.js
import fs from 'fs'
import path from 'path'
import url from 'url'

const filename = url.fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const allowedExtensions = new Set(['.js'])

const getAbsoluteFiles = (dirPath) => {
  let files = []
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const ext = path.extname(entry.name)
      const fullPath = path.join(dirPath, entry.name)
      if (entry.isDirectory()) {
        files = files.concat(getAbsoluteFiles(fullPath))
      } else if (entry.isFile() && allowedExtensions.has(ext)) {
        files.push(fullPath)
      }
    }
  } catch (err) {
    console.error(`[Router Setup Error] Failed to read directory: ${dirPath}`, err)
  }
  return files
}

export default async (app, folder = '../routers') => {
  const routerDir = path.join(dirname, folder)
  const filePaths = getAbsoluteFiles(routerDir)

  for (const filePath of filePaths) {
    try {
      const fileUrl = new URL(`file://${filePath}`).href
      const routeModule = await import(fileUrl)

      if (routeModule.default && typeof routeModule.default.routes === 'function') {
        app.use(routeModule.default.routes())
        app.use(routeModule.default.allowedMethods())
      }
    } catch (error) {
      throw new Error(`Failed to load route module [${filePath}]: ${error.message}`)
    }
  }
}
