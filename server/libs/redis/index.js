const redis = require('redis')
const { list } = require('redis-commands')
const { promisify } = require('util')
const { createCache, getRandomSubscript } = require('./interval-cache-store')

function getRedisPool(config, key) {
  const interval = 1000 * 60 * 5

  const pool = createCache(
    `redis-${key}`,
    () => {
      const redisPool = createRedisClient(config)

      setTimeout(() => {
        try {
          redisPool.quit()
        } catch (err) {
          console.error(`Close Redis Error → ${key}, ${err}`)
        }
      }, interval * 2)

      return redisPool
    },
    interval
  )

  return pool
}

/**
 * 创建redis客户端连接
 * @param {string} host redis对应的IP
 * @param {number} port 创建链接的端口
 * @return {redisClient}
 */
function createRedisClient(option) {
  const m = option.master[getRandomSubscript(option.master.length)]
  const one = m.split(':')
  const host = one[0]
  const port = Number(one[1]) || 6379

  const createClien = redis.createClient(port, host)
  const redisClient = build(createClien)

  return redisClient
}

/**
 * 将 Redis 命令转换为 Promise 版本
 * @param {any} target RedisClient
 * @return {any}
 */
function build(target) {
  list.forEach((method) => {
    const func = target[method]
    if (typeof func === 'function') {
      target[method] = promisify(func)
      target[method.toUpperCase()] = promisify(func)
    }
  })

  return target
}

module.exports = getRedisPool
