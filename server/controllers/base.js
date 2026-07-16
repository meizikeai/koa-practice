// controllers/base.js
import { handleJsonWebTokenDecrypt } from '../libs/jwt.js'
import { handleServiceDecrypt } from '../libs/secret.js'

export default class BaseController {
  // 404
  notFound = async (ctx) => {
    const accepts = ctx.accepts('html')
    if (accepts === 'html') {
      ctx.state = { status: '404', message: 'Page Not Found' }
      await ctx.render('error')
    } else {
      ctx.body = { code: 404, message: 'Page Not Found' }
    }
  }

  // 403
  forbidden = async (ctx) => {
    const accepts = ctx.accepts('html')
    if (accepts === 'html') {
      ctx.state = { status: '403', message: 'Forbidden' }
      await ctx.render('error')
    } else {
      ctx.body = { code: 403, message: 'Forbidden' }
    }
  }

  // Authorization
  auth = async (ctx, next) => {
    const { authorization } = ctx.request.header
    const { method } = ctx.request

    // 1. OPTIONS
    if (method === 'OPTIONS') {
      return await next()
    }

    // 2. Authorization
    if (!authorization || authorization.trim() === '') {
      await this.forbidden(ctx)
      return
    }

    // 3. Bearer token
    const authorizationList = authorization.split(' ')
    if (authorizationList.length !== 2) {
      await this.forbidden(ctx)
      return
    }

    const [bearer, tokenDecrypt] = authorizationList
    if (bearer.toLowerCase() !== 'bearer' || tokenDecrypt.trim() === '') {
      await this.forbidden(ctx)
      return
    }

    let claims = null

    // 4. Token
    try {
      const token = handleServiceDecrypt(tokenDecrypt)
      claims = handleJsonWebTokenDecrypt(token)
    } catch (error) {
      console.error('Token parsing failed:', error)
      await this.forbidden(ctx)
      return
    }

    // 5. 401
    const nowInSeconds = Date.now() / 1000
    if (!claims || claims.exp < nowInSeconds || claims.iat > nowInSeconds) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        message: 'Invalid login credentials, please log in again.',
      }
      return
    }

    ctx.state.user = claims
    await next()
  }
}
