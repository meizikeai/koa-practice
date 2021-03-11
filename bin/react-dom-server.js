const fs = require('fs')
const path = require('path')
// eslint-disable-next-line
const React = require('react')
// eslint-disable-next-line
const ReactDOMServer = require('react-dom/server')

const isPhone = require('../server/libs/is-phone')

const isDirectory = (dir) => {
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

function ReactDOMServerMiddleware(rel) {
  return (ctx, next) => {
    if (ctx.stream) return next()

    let stream = ''

    global.KoaPractice.device = !isPhone(ctx.request.header['user-agent'])

    ctx.stream = async (dir) => {
      const file = path.resolve(rel, dir)

      try {
        // Object.keys(require.cache).forEach(cachePath => {
        //   if (/koa-practice\/client\//ig.test(cachePath)) {
        //     // console.log(cachePath)
        //     delete require.cache[cachePath]
        //   }
        // })

        const filepath = isDirectory(file) ? `${file}/index.js` : `${file}.js`
        // eslint-disable-next-line
        const APP = require(filepath);
        const element = React.createElement(APP)

        stream = ReactDOMServer.renderToString(element)
      } catch (error) {
        console.error(error)
      }
      // console.log(stream)

      ctx.state.stream = stream
    }

    return next()
  }
}

module.exports = ReactDOMServerMiddleware
