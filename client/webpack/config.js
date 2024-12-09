import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isDirectory = (dir) => {
  let result = false

  try {
    const stat = fs.statSync(dir)
    if (stat.isDirectory()) {
      result = true
    }
  } catch (err) {
    console.error(`"${dir}" is not a directory!`, err)
  }

  return result
}

// https://polyfill.io/v3/polyfill.min.js
const plugin = (() => {
  const result = { dll: [], manifest: [] }
  const files = fs.readdirSync(path.resolve(__dirname, '../../public/dll'))

  files.forEach((file) => {
    if (/.*\.dll.js$/.test(file)) {
      result.dll.push(file)
    }
    if (/.*\.manifest.json$/.test(file)) {
      result.manifest.push(file)
    }
  })

  return result
})()

const getFolder = (dir) => {
  let vessel = []
  let result = []
  const stat = isDirectory(dir)

  if (stat) {
    vessel = fs.readdirSync(dir)
  }

  vessel.forEach((name) => {
    const file = path.join(dir, name)
    const stat = isDirectory(file)

    if (stat) {
      result = result.concat(getFolder(file))
    } else {
      result.push({ name: name.split('.')[0], module: file })
    }
  })

  return result
}

export { plugin, getFolder, isDirectory }
