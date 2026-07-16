// server/libs/client.js
import crypto from 'crypto'

async function coreRequest({ url, data, headers = {}, method = 'GET', timeout = 4000 }) {
  const normalizedMethod = method.toUpperCase()

  const option = {
    method: normalizedMethod,
    headers: Object.assign(
      {
        'Content-Type': 'application/json',
        'X-Request-ID': headers['X-Request-ID'] || crypto.randomBytes(16).toString('hex'),
      },
      headers,
    ),
    signal: AbortSignal.timeout(timeout),
  }

  if (['POST', 'PUT', 'PATCH'].includes(normalizedMethod) && data) {
    option.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(url, option)

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
    }

    const resData = await response.json()
    // console.log({ url, method: normalizedMethod, status: response.status, result: resData })
    return resData
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.error(`Request Timeout [${normalizedMethod}] -> ${url} exceeded ${timeout}ms`)
    } else {
      console.error(`Request Failed [${normalizedMethod}] -> ${url}:`, error.message)
    }
    throw error
  }
}

const client = {
  get: (url, { headers, timeout } = {}) => coreRequest({ url, method: 'GET', headers, timeout }),
  post: (url, data, { headers, timeout } = {}) => coreRequest({ url, method: 'POST', data, headers, timeout }),
  put: (url, data, { headers, timeout } = {}) => coreRequest({ url, method: 'PUT', data, headers, timeout }),
  delete: (url, { headers, timeout } = {}) => coreRequest({ url, method: 'DELETE', headers, timeout }),
}

export default client
