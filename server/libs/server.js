const { getCache, getRandom } = require('../libs/cache')

function getClient(key) {
  const client = getCache('server')
  const index = getRandom(client[key].length)

  return client[key][index]
}

module.exports = getClient
