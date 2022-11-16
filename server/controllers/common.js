const ctxUtils = require('../libs/ctx-utils')
const { getAnchors, getUser, tryBegin } = require('../models/common')

module.exports = {
  async home(ctx) {
    const { device } = ctxUtils({ ctx })

    ctx.state = {
      title: 'Hello Koa 2!',
      device: device ? 'Personal Computer' : 'Mobile Phone',
      config: JSON.stringify({
        question: 'Who is my love?',
        answer: 'Is you?',
      }),
    }

    // await getAnchors()
    // await getUser()

    // 事务
    // tryBegin()

    await ctx.render('index')
  },

  // 404
  async notFound(ctx, next) {
    const accepts = ctx.accepts('html', 'json')

    if (accepts === 'html') {
      ctx.state = {
        status: '404',
        message: 'Page Not Found',
      }
      await ctx.render('error')
      await next()
    } else if (accepts === 'json') {
      ctx.body = {
        code: 404,
        message: 'Page Not Found',
      }
    } else {
      ctx.type = 'text'
      ctx.body = 'Page Not Found'
    }
  },

  // 403
  async forbidden(ctx, next) {
    const accepts = ctx.accepts('html', 'json')

    if (accepts === 'html') {
      ctx.state = {
        status: '403',
        message: 'Forbidden',
      }
      await ctx.render('error')
      await next()
    } else if (accepts === 'json') {
      ctx.body = {
        code: 403,
        message: 'Forbidden',
      }
    } else {
      ctx.type = 'text'
      ctx.body = 'Forbidden'
    }
  },
}
