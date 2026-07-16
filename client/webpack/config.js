import fs from 'fs'
import path from 'path'
import url from 'url'

const dirname = getDirname(import.meta.url)

export function getDirname(metaUrl) {
  const filename = url.fileURLToPath(metaUrl)
  return path.dirname(filename)
}

export const isDirectory = (dir) => {
  try {
    return fs.existsSync(dir) && fs.statSync(dir).isDirectory()
  } catch (err) {
    console.error(err)
    return false
  }
}

export const plugin = (() => {
  const result = { dll: [], manifest: [] }
  const dllPath = path.resolve(dirname, '../../public/dll')

  if (!fs.existsSync(dllPath)) {
    return result
  }

  const files = fs.readdirSync(dllPath)

  for (const file of files) {
    if (file.endsWith('.dll.js')) {
      result.dll.push(file)
    } else if (file.endsWith('.manifest.json')) {
      result.manifest.push(file)
    }
  }

  return result
})()

export const getFolder = (dir) => {
  let result = []

  if (!isDirectory(dir)) return result

  const names = fs.readdirSync(dir)

  for (const name of names) {
    if (name.startsWith('.')) continue

    const file = path.join(dir, name)

    if (isDirectory(file)) {
      result = result.concat(getFolder(file))
    } else {
      if (name === 'index.js' || name === 'index.jsx') {
        result.push({
          name: 'index',
          module: file,
        })
      }
    }
  }

  return result
}
