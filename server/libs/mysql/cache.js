class Cache {
  constructor() {
    this.mysqlCache = new Map()
  }

  has(key) {
    return this.mysqlCache.has(key)
  }

  get(key) {
    return this.mysqlCache.get(key)
  }

  set(key, mysqlPool) {
    return this.mysqlCache.set(key, mysqlPool)
  }
}

module.exports = Cache
