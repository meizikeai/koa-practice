import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const checkDirectory = (dir) => {
  let result = false
  try {
    const state = fs.statSync(dir)
    if (state.isDirectory()) {
      result = true
    }
  } catch (err) {
    console.error(`"${dir}" is not a directory!`, err)
  }
  return result
}

const folder = (dir) => {
  let vessel = []
  let result = []

  const stat = checkDirectory(dir)

  if (stat) {
    vessel = fs.readdirSync(dir)
  }

  vessel.forEach((name) => {
    const file = path.join(dir, name)
    const stat = checkDirectory(file)
    if (stat) {
      result = result.concat(folder(file))
    } else {
      result.push({ name: name.split('.')[0], module: file })
    }
  })

  return result
}

export default (app) => {
  const route = folder(path.join(__dirname, '../routers'))

  route.forEach(async (crl) => {
    const enable = /\.js$/gi.test(crl.module)

    if (enable === true) {
      import(crl.module)
        .then((routeModule) => {
          if (routeModule.default) {
            app.use(routeModule.default.routes())
            app.use(routeModule.default.allowedMethods())
          }
        })
        .catch((error) => {
          console.error(`Unable to load routes "${crl.module}"`, error.message)
        })
    }
  })
}
