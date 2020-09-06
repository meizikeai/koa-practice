const ctxUtils = require('../libs/ctx-utils')

module.exports = {
  async demo(ctx) {
    const { device } = ctxUtils({ ctx })

    ctx.state = Object.assign({}, {
      title: 'Hello Demo!',
      config: JSON.stringify({
        device,
        question: 'Who is my love?',
        answer: 'Is you?',
      }),
    })

    ctx.stream('demo')
    await ctx.render('demo')
  },

  async json(ctx) {
    ctx.body = {
      title: 'koa2 json',
    }
  },

  async string(ctx) {
    ctx.body = 'koa2 string'
  },
}
