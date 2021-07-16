const getMysqlClient = require('../libs/mysql')
const getRedisClient = require('../libs/redis')
const getserverClient = require('../libs/server')

const mysqlClient = (key) => {
  return getMysqlClient(key)
}

const redisClient = (key) => {
  return getRedisClient(key)
}

const serverClient = (key) => {
  return getserverClient(key)
}

module.exports = {
  mysqlClient,
  redisClient,
  serverClient,
}
