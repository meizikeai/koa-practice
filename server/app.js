require('../bin/compatible')

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const cors = require('@koa/cors')
const helmet = require('koa-helmet')
const json = require('koa-json')
const jsonp = require('koa-safe-jsonp')
const { koaBody } = require('koa-body')
const logger = require('koa-visit-logger')
const onerror = require('koa-onerror')
const path = require('path')
const routerScheme = require('koa-router-scheme')
const views = require('koa-views')

const { handleZookeeper } = require('./libs/zookeeper')

const app = new Koa()

// zookeeper
// handleZookeeper()

// global
global.KoaPractice = {}

// logger
app.use(
  logger({
    appName: 'koa-practice',
  })
)

// error
onerror(app)

// json
app.use(json())

// jsonp
jsonp(app)

// compress
app.use(
  compress({
    threshold: 2048,
  })
)

// helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// cors
app.use(
  cors({
    credentials: true,
    maxAge: 5 * 60,
    origin: (e) => {
      const white = ['http://127.0.0.1:7000']

      if (white.includes(e.header.origin)) {
        return e.header.origin
      }
    },
  })
)

// body, files
app.use(koaBody({ multipart: true }))
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }))

// public
app.use(require('koa-static')(path.join(__dirname, '../public')), {
  gzip: true,
  maxage: 10 * 24 * 60 * 1000,
})

// react dom server
app.use(require('../bin/react-dom-server')(path.join(__dirname, '../client/pages')))

// views
app.use(
  views(path.join(__dirname, '../views'), {
    extension: 'hbs',
    map: { hbs: 'handlebars' },
  })
)

// routes
routerScheme({ app })

// 404､403
app.use(async (ctx, next) => {
  await next()

  const { status } = ctx
  const accepts = ctx.accepts('html', 'json')
  const result = {
    json: {
      code: status,
      message: status === 403 ? 'Forbidden' : 'Page Not Found',
    },
    text: {
      type: 'text',
      body: status === 403 ? 'Forbidden' : 'Page Not Found',
    },
  }

  if (status === 404 || status === 403) {
    if (accepts === 'html') {
      ctx.redirect(`/${status}`)
      return false
    } else if (accepts === 'json') {
      ctx.body = result.json
      return false
    } else {
      ctx.type = result.text.type
      ctx.body = result.text.body
      return false
    }
  }
})

// error-handling
process.on('uncaughtException', (err, origin) => {
  console.error(`${process.stderr.fd}, Caught exception: ${err}, Exception origin: ${origin}`)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

app.on('error', (err) => {
  console.error(err)
})

module.exports = app
