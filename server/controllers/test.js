// controllers/test.js
import client from '../libs/client.js'
import { MysqlModel, RedisModel } from '../models/index.js'

class TestController {
  async demo(ctx) {
    const api = await client.get('http://127.0.0.1:8000/json')
    console.log(api)

    const mysql = await MysqlModel.test()
    console.log(mysql)

    const redis = await RedisModel.test()
    console.log(redis)

    ctx.state = {
      title: 'Hello Demo!',
    }

    await ctx.render('demo')
  }

  async json(ctx) {
    ctx.log.warn('Hello, warn!')
    ctx.log.error('An error occurred!')
    ctx.log.info('Hello, Pino!')

    ctx.body = {
      title: 'koa2 json',
    }
  }

  async string(ctx) {
    ctx.body = 'koa2 string'
  }
}

export default new TestController()
