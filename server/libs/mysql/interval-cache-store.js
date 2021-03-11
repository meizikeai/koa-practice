/**
 * 缓存相关的一个工具
 * 用于各种qconf配置的存储和读取
 */
const Cache = require('./cache')

const intervalCache = new Cache()
const defaultInterval = 1000
const maxErrorCount = 10

/**
 * 定时更新缓存数据
 * 一个进程，一个`key`只会保存一份数据
 * @param   {string}    key       缓存的唯一标识
 * @param   {function}  getData   获取数据的函数
 * @param   {number}    interval  重新获取数据的间隔
 * @return  {function}            缓存对应的数据函数获取的数据
 * @example const getCache = createCache('key', () => 123, 1000); getCache()
 */
function createCache(key, getData, interval = defaultInterval) {
  if (!hasCache(key)) {
    // 如果没有已存在的key，则需要判断`getData`参数是否为函数类型，用来设置新的数据
    if (!getData || typeof getData !== 'function') throw new Error('getData must be function')

    // 获取缓存出错次数
    let cacheErrorCount = 0

    const intervalFunc = () => {
      try {
        setCache(key, getData())

        // 成功获取到数据后清空 errorCount
        cacheErrorCount = 0
      } catch (e) {
        console.error(`cache error with key: [${key}], count: [${cacheErrorCount}]`, e)
        cacheErrorCount += 1
      } finally {
        // 如果报错次数超出上限，则停止继续获取数据
        if (maxErrorCount <= cacheErrorCount) {
          console.error(`cache error with key: [${key}], auto close it.`)
        } else {
          setTimeout(intervalFunc, interval * (cacheErrorCount + 1))
        }
      }
    }

    intervalFunc()
  }

  return () => getCache(key)
}

/**
 * 获取缓存数据
 * @param   {string} key  缓存的唯一标识
 * @return  {any}         缓存对应的数据函数获取的数据
 * @example const val = getCache('key')
 */
function getCache(key) {
  return intervalCache.get(key)
}

/**
 * 检测缓存是否存在
 * @param   {string} key  缓存的唯一标识
 * @return  {boolean}     true: 存在 false: 不存在
 * @example const isExist = hasCache('key')
 */
function hasCache(key) {
  return intervalCache.has(key)
}

/**
 * 设置缓存对应的更新值
 * @param   {string} key  缓存的唯一标识
 * @example setCache('key', 'value')
 */
function setCache(key, value) {
  intervalCache.set(key, value)
}

/**
 * 获取特定范围内的数
 * @param   {string} len  特定长度
 * @example getRandomSubscript(5)
 */
function getRandomSubscript(len) {
  return Math.floor(Math.random() * len + 1) - 1
}

module.exports = {
  createCache,
  getCache,
  hasCache,
  setCache,
  getRandomSubscript,
}
