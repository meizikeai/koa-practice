import jwt from '../libs/jwt.js'
import secret from '../libs/secret.js'

export default {
  async home(ctx) {
    ctx.state = {
      title: 'Hello Koa 2!',
    }

    await ctx.render('index')
  },

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

  async auth(ctx, next) {
    const { authorization } = ctx.request.header
    const { method } = ctx.request
    const forbidden = async (ctx, next) => {
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
    }

    if (method !== 'OPTIONS') {
      if (authorization.trim() === '') {
        forbidden(ctx, next)
        return
      }

      const authorizationList = authorization.split(' ')

      if (authorizationList.length !== 2) {
        forbidden(ctx, next)
        return
      }

      const bearer = authorizationList[0]
      const tokenDecrypt = authorizationList[1]

      if (bearer.toLowerCase() != 'bearer' || tokenDecrypt.trim() == '') {
        forbidden(ctx, next)
        return
      }

      let claims = null

      try {
        const token = secret.HandleServiceDecrypt(tokenDecrypt)
        claims = jwt.HandleJsonWebTokenDecrypt(token)
        // console.log(claims)
      } catch (error) {
        console.error(error)
      }

      const times = Date.now() / 1000

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
