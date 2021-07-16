const { getCache } = require('../libs/cache-store')
const { getRandomSubscript } = require('../libs/random')

function getClient(key) {
  const client = getCache('server')
  const index = getRandomSubscript(client[key].length)

  return client[key][index]
}

module.exports = getClient
