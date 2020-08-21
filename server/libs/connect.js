const createMySQLClient = require('ai-mysql-client')
const createRedisClient = require('ai-redis-client')
const { Qconf } = require('@blued-core/qconf')

const datum = require('../config/datum')
const { isLocalPro } = require('../config/env')

const qconf = new Qconf(datum)
qconf.flag = isLocalPro ? 'production' : ''

const mysqlClient = key => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createMySQLClient({
    key, option: qconf,
  })()
}

const redisClient = key => {
  if (!(key in datum)) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createRedisClient({
    key, option: qconf,
  })()
}

module.exports = {
  mysqlClient,
  redisClient,
}
