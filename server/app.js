import path from 'path'
import koa from 'koa'
import compress from 'koa-compress'
import cors from '@koa/cors'
import helmet from 'koa-helmet'
import json from 'koa-json'
import koaBodyParser from 'koa-bodyparser'
import logger from 'koa-pino-logger'
import serve from 'koa-static'
import views from '@ladjs/koa-views'

import initRouter from './libs/handle-router.js'
import { getDirname } from './utils/common.js'
// import { initMySQL } from './libs/mysql.js'
// import { initRedis } from './libs/redis.js'

const app = new koa()
const dirname = getDirname(import.meta.url)

// helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
)

// cors
app.use(
  cors({
    credentials: true,
    maxAge: 5 * 60,
    origin: (ctx) => {
      const origin = ctx.get('Origin')
      const white = ['http://127.0.0.1:7000', 'http://127.0.0.1:9000']
      if (white.includes(origin)) {
        return origin
      }
      return false
    },
  }),
)

// not found
app.use(async (ctx, next) => {
  try {
    await next()

    const { status } = ctx
    if (status === 404 || status === 403) {
      const accepts = ctx.accepts('html')
      const message = status === 403 ? 'Forbidden' : 'Page Not Found'

      if (accepts === 'html') {
        ctx.redirect(`/${status}`)
      } else {
        ctx.body = { code: status, message }
      }
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.app.emit('error', err, ctx)

    const accepts = ctx.accepts('json')
    if (accepts === 'json') {
      ctx.body = { code: ctx.status, message: 'Internal Server Error' }
    } else {
      ctx.body = 'Internal Server Error'
    }
  }
})

// compress
app.use(compress({ threshold: 4096 }))

// public
app.use(
  serve(path.join(dirname, '../public'), {
    gzip: true,
    maxage: 10 * 24 * 60 * 1000,
  }),
)

// views
app.use(
  views(path.join(dirname, '../views'), {
    extension: 'hbs',
    map: { hbs: 'handlebars' },
  }),
)

// logger
app.use(logger())

// bodyParser
app.use(koaBodyParser({ enableTypes: ['json', 'form', 'text'] }))
app.use(json())

app.on('error', (err, ctx) => {
  console.error(`[Server Error] URL: ${ctx?.url || 'N/A'}`, err)
})

export async function bootstrap() {
  console.log('[Server] Starting services initialization...')

  // await initMySQL()
  // await initRedis()
  await initRouter(app)

  return app
}
