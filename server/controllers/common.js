const ctxUtils = require('../libs/ctx-utils')
const j = require('../libs/jwt')
const s = require('../libs/secret')
// const { getAnchors, getUser, tryBegin } = require('../models/common')

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

  // Bearer ciphertext
  // {"exp":1725171583,"iat":1721974783,"vow":"i love you"}
  async auth(ctx, next) {
    const { authorization } = ctx.request.header
    const { method } = ctx.request

    if (method !== 'OPTIONS') {
      if (authorization.trim() === '') {
        this.forbidden(ctx, next)
        return
      }

      const authorizationList = authorization.split(' ')

      if (authorizationList.length !== 2) {
        this.forbidden(ctx, next)
        return
      }

      const bearer = authorizationList[0]
      const tokenDecrypt = authorizationList[1]

      if (bearer.toLowerCase() != 'bearer' || tokenDecrypt.trim() == '') {
        this.forbidden(ctx, next)
        return
      }

      let claims = null

      try {
        // 解码
        const token = s.HandleServiceDecrypt(tokenDecrypt)
        // 验证
        claims = j.HandleJsonWebTokenDecrypt(token)
        // console.log(claims)
      } catch (error) {
        console.error(error)
      }

      const times = Date.now() / 1000

      // 验证过期时间 / 判断用户
      if (claims.exp < times || claims.iat > times) {
        ctx.body = {
          code: 401,
          message: 'Invalid login credentials, please log in again.',
        }

        return false
      }

      await next()
    } else {
      await next()
    }
  },
}
