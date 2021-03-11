const createMySQLClient = require('./mysql')
const createRedisClient = require('./redis')
const releaseMySQL = require('../config/release-mysql')
const releaseRedis = require('../config/release-redis')
const testMySQL = require('../config/test-mysql')
const testRedis = require('../config/test-redis')
const { isPro, isLocalPro } = require('../config/env')

const mysqlClient = (key) => {
  let datum = testMySQL

  if (isPro || isLocalPro) {
    datum = releaseMySQL
  }

  if (!datum[key]) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createMySQLClient(datum[key], key)()

  // if (!datum[key] && !global.zookeeperConfigMySQL[key]) {
  //   throw new Error(`Can not find the key: [${key}]`)
  // }

  // return createMySQLClient(datum[key] || global.zookeeperConfigMySQL[key], key)()
}

const redisClient = (key) => {
  let datum = testRedis

  if (isPro || isLocalPro) {
    datum = releaseRedis
  }

  if (!datum[key]) {
    throw new Error(`Can not find the key: [${key}]`)
  }

  return createRedisClient(datum[key], key)()

  // if (!datum[key] && !global.zookeeperConfigRedis[key]) {
  //   throw new Error(`Can not find the key: [${key}]`)
  // }

  // return createRedisClient(datum[key] || global.zookeeperConfigRedis[key], key)()
}

module.exports = {
  mysqlClient,
  redisClient,
}
