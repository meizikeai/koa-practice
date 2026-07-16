// controllers/common.js
import BaseController from './base.js'

class CommonController extends BaseController {
  constructor() {
    super()
  }

  async home(ctx) {
    ctx.state = {
      title: 'Hello Koa 2!',
    }
    await ctx.render('index')
  }
}

export default new CommonController()
