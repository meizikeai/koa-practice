// server/libs/redis.js
import Redis from 'ioredis'
import * as config from '../config/index.js'
import { appCache, getRandomIndex } from './cache.js'

const env = process.env.NODE_ENV || 'development'

export async function initRedis() {
  const redisConfig = config.redis
  if (!redisConfig) throw new Error('[Server] No redis configuration found.')

  for (const redisKey of Object.keys(redisConfig)) {
    const envConfig = redisConfig[redisKey][env]
    if (!envConfig) continue

    if (envConfig.master && envConfig.master.length > 0) {
      const clients = envConfig.master.map((addr) => {
        const [host, port] = addr.split(':')
        return new Redis({
          host,
          port: Number(port) || 6379,
          password: envConfig.password || undefined,
          family: envConfig.family || 4,
          db: envConfig.db || 0,
          lazyConnect: true,
        })
      })

      await Promise.all(clients.map((client) => client.connect()))

      appCache.set(`redis.${redisKey}`, clients)
    }
  }
}

export function getRedisClient(path = 'default') {
  const clients = appCache.get(`redis.${path}`)
  if (!clients || clients.length === 0) {
    throw new Error('[Server] No active redis clients found.')
  }

  const index = getRandomIndex(clients.length)
  return clients[index]
}
