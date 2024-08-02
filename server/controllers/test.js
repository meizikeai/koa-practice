const ctxUtils = require('../libs/ctx-utils')
// const request = require('../libs/request')
const log = require('../libs/logger')

module.exports = {
  async demo(ctx) {
    const { device } = ctxUtils({ ctx })

    ctx.state = Object.assign(
      {},
      {
        title: 'Hello Demo!',
        config: JSON.stringify({
          device,
          question: 'Who is my love?',
          answer: 'Is you?',
        }),
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

    ctx.stream('demo')
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
