import mysql from 'mysql2'
import releaseMySQL from '../config/release-mysql.js'
import testMySQL from '../config/test-mysql.js'
import { handleCache, getCache, getRandom } from './cache.js'
import { isPro } from '../config/env.js'

function handleMySQL(key) {
  let datum = testMySQL

  if (isPro) {
    datum = releaseMySQL
  }

  const result = {}
  const [where, branch] = key.split('.')
  const zk = getCache('mysql')

  datum = Object.assign(datum, zk)

  if (!datum[where]) {
    throw new Error(`Can not find the key: ${where}`)
  }

  for (const k in datum) {
    if (k !== where) {
      continue
    }

    const config = datum[k]
    let data = config.master

    if (branch === 'slave') {
      data = config.slave
    }

    result[key] = []

    for (let i = 0; i < data.length; i++) {
      const element = data[i]
      const [host, port] = element.split(':')
      const pool = mysql.createPool({
        host: host,
        port: Number(port) || 3306,
        user: config.username,
        password: config.password,
        database: config.database,
        connectionLimit: config.connection || 100,
        connectTimeout: 5000,
        waitForConnections: true,
      })
      const client = pool.promise()

      result[key][i] = client
    }
  }

  return result
}

function getClient(key) {
  const pool = handleCache(`mysql.${key}`, () => {
    const client = handleMySQL(key)
    const index = getRandom(client[key].length)

    return client[key][index]
  })

  return pool
}

export default getClient
