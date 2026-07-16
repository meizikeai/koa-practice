// server/libs/cache.js
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
    this.cache.set(key, value)
    return value
  }
}

export const appCache = new Cache()
export const getRandomIndex = (len) => Math.floor(Math.random() * len)
