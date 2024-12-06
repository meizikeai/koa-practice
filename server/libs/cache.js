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

const newCache = new Cache()
const getRandom = (len) => Math.floor(Math.random() * len + 1) - 1
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

function handleCache(key, func) {
  if (!hasCache(key)) {
    if (!func || typeof func !== 'function') {
      throw new Error('"func" always must be a function call')
    }

    try {
      setCache(key, func())
    } catch (e) {
      console.error(`error with key: ${key}`, e)
    }
  }

  return getCache(key)
}

function getCache(key) {
  return newCache.get(key)
}

function hasCache(key) {
  return newCache.has(key)
}

function setCache(key, value) {
  newCache.set(key, value)
}

export { handleCache, getCache, hasCache, setCache, getRandom }
