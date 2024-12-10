import crypto from 'crypto'
import log from './log.js'

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
      log.info({ url, option, result: res })

      if (typeof resolve === 'function') {
        return resolve(res)
      }
    })
    .catch((error) => {
      log.error(error, { url, option })

      if (typeof reject === 'function') {
        reject(error)
      }
    })

  return result
}

export default request
