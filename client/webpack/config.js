const fs = require('fs')
const path = require('path')

const qiniu = {
  bucket: 'xxxx',
  cdnBase: 'xxxx',
  accessKey: 'xxxx',
  secretKey: 'xxxx',
}

const isDirectory = dir => {
  let result = false

  try {
    const stat = fs.statSync(dir)
    if (stat && stat.isDirectory()) {
      result = true
    }
  } catch (err) {
    console.error(`"${dir}" is not a directory!`)
  }

  return result
}

// https://polyfill.io/v3/polyfill.min.js
const dllPlugin = (() => {
  const result = { dll: [], manifest: [] }
  const files = fs.readdirSync(path.resolve(__dirname, '../../public/dll'))

  files.forEach(file => {
    if (/.*\.dll.js$/.test(file)) {
      result.dll.push(file)
    }
    if (/.*\.manifest.json$/.test(file)) {
      result.manifest.push(file)
    }
  })

  return result
})()

const getFolder = dir => {
  let vessel = []
  let result = []
  const stat = isDirectory(dir)

  if (stat) {
    vessel = fs.readdirSync(dir)
  }

  vessel.forEach(name => {
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

module.exports = {
  dll: dllPlugin.dll,
  getFolder,
  isDirectory,
  manifest: dllPlugin.manifest,
  qiniu,
}