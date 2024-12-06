import path from 'path'
import koa from 'koa'
import compress from 'koa-compress'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import json from 'koa-json'
import jsonp from 'koa-safe-jsonp'
import { koaBody } from 'koa-body'
import logger from 'koa-logger'
import koaBodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import views from '@ladjs/koa-views'

import { fileURLToPath } from 'url'
import router from './libs/router.js'
import { awaitZookeeper, handleZookeeper } from './libs/zookeeper.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = new koa()
const port = process.env.PORT || 3000

// zookeeper
handleZookeeper()

// logger
app.use(logger())

// public
app.use(serve(path.join(__dirname, '../public')), {
  gzip: true,
  maxage: 10 * 24 * 60 * 1000,
})

// views
app.use(
  views(path.join(__dirname, '../views'), {
    extension: 'hbs',
    map: { hbs: 'handlebars' },
  })
)

// body / files
app.use(koaBody({ multipart: true }))
app.use(koaBodyParser({ enableTypes: ['json', 'form', 'text'] }))

// compress
app.use(
  compress({
    threshold: 2048,
  })
)

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// cross-origin resource sharing
app.use(
  cors({
    credentials: true,
    maxAge: 5 * 60,
    origin: (e) => {
      const white = ['http://127.0.0.1:7000', 'http://127.0.0.1:9000']

      if (white.includes(e.header.origin)) {
        return e.header.origin
      }
    },
  })
)

// json
app.use(json())

// jsonp
jsonp(app)

// routes
router(app)

// forbidden / not found
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

// listening
awaitZookeeper().then(() => {
  app.listen(port, () => {
    console.log(`Listen and Server running on 127.0.0.1:${port}`)
  })
})
