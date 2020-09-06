const logger = require('../libs/logger')
const { mysqlClient, redisClient } = require('../libs/connect')

module.exports = {
  async getAnchors() {
    const commonMySQL = mysqlClient('commonMySQL')

    const selectSQL = `SELECT uid FROM ACTIVITY_TEST limit 0 ,10`
    const anchors = await commonMySQL.query(selectSQL).catch(err => {
      logger.error(err, { tips: 'test -> query error' })
    })

    logger.info({ notice: anchors })

    return anchors
  },
  async getUser() {
    const commonRedis = redisClient('commonRedis')

    const anchors = await commonRedis.hgetall('u:113').catch(err => {
      logger.error(err, { tips: 'test -> query error' })
    })

    logger.info({ notice: anchors })

    return anchors
  },
}
