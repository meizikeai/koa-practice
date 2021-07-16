class Cache {
  constructor() {
    this.cache = new Map()
  }

  has(key) {
    return this.cache.has(key)
  }

  get(key) {
    return this.cache.get(key)
  }

  set(key, value) {
    return this.cache.set(key, value)
  }
}

module.exports = Cache
