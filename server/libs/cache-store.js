const Cache = require('./cache')

const newCache = new Cache()

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

module.exports = { handleCache, getCache, hasCache, setCache }
