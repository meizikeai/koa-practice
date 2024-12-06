import log from '../libs/log.js'

export default {
  async demo(ctx) {
    ctx.state = Object.assign(
      {},
      {
        title: 'Hello Demo!',
      }
    )

    // request({
    //   url: "http://127.0.0.1:3000/json",
    //   reject: err => {
    //     console.log(err)
    //   },
    //   resolve: data => {
    //     console.log(data)
    //   }
    // })

    await ctx.render('demo')
  },

  async json(ctx) {
    log.warn('Hello, warn!')
    log.error('An error occurred!')
    log.info('Hello, Pino!')
    log.debug('This is a debug message')
    log.trace('Hello, trace!')

    ctx.body = {
      title: 'koa2 json',
    }
  },

  async string(ctx) {
    ctx.body = 'koa2 string'
  },
}
