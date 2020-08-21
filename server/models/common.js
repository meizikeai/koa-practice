const { mysqlClient, redisClient } = require('../libs/connect')

module.exports = {
  async getAnchors ({ ctx }) {
    const commonMySQL = mysqlClient('commonMySQL')

    const selectSQL = `SELECT uid FROM ACTIVITY_TEST limit 0 ,10`
    const anchors = await commonMySQL.query(selectSQL).catch(err => {
      ctx.logger.error(err, { tips: 'test -> query error' })
    })

    ctx.logger.info({ notice: anchors })

    return anchors
  },
  async getUser ({ ctx }) {
    const commonRedis = redisClient('commonRedis')

    const anchors = await commonRedis.hgetall('u:113').catch(err => {
      ctx.logger.error(err, { tips: 'test -> query error' })
    })

    ctx.logger.info({ notice: anchors })

    return anchors
  },
}
