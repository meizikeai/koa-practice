import { getRedisClient } from '../libs/redis.js'

export default class RedisModel {
  static async test() {
    const client = getRedisClient('default')
    const result = await client.hgetall('u:1')
    return result
  }
}
