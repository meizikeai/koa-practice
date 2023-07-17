const crypto = require('crypto')
const logger = require('./logger')

async function request({ url, data, headers = {}, method = 'get', reject, resolve }) {
  const option = {
    method,
    headers: Object.assign(
      {
        'Content-Type': 'application/json',
        'X-Request-ID': crypto.randomBytes(16).toString('hex'),
      },
      headers
    ),
  }

  if (method.toLocaleLowerCase() === 'post') {
    option.body = JSON.stringify(data || {})
  }

  const result = await fetch(url, option)
    .then((res) => res.json())
    .then((res) => {
      logger.info({ url, option, result: res })

      if (typeof resolve === 'function') {
        return resolve(res)
      }
    })
    .catch((error) => {
      logger.error(error, { url, option })

      if (typeof reject === 'function') {
        reject(error)
      }
    })

  return result
}

module.exports = request
