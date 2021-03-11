class Cache {
  constructor() {
    this.redisCache = new Map()
  }

  has(key) {
    return this.redisCache.has(key)
  }

  get(key) {
    return this.redisCache.get(key)
  }

  set(key, mysqlPool) {
    return this.redisCache.set(key, mysqlPool)
  }
}

module.exports = Cache
