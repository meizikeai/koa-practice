// server/libs/mysql.js
import mysql from 'mysql2/promise'
import * as config from '../config/index.js'
import { appCache, getRandomIndex } from './cache.js'

const env = process.env.NODE_ENV || 'development'

export async function initMySQL() {
  const mysqlConfig = config.mysql
  if (!mysqlConfig) throw new Error('[Server] No mysql configuration found.')

  for (const dbKey of Object.keys(mysqlConfig)) {
    const envConfig = mysqlConfig[dbKey][env]
    if (!envConfig) continue

    if (envConfig.master && envConfig.master.length > 0) {
      const masterPools = envConfig.master.map((addr) => createPoolInstance(addr, envConfig))
      appCache.set(`mysql.${dbKey}.master`, masterPools)
    }

    if (envConfig.slave && envConfig.slave.length > 0) {
      const slavePools = envConfig.slave.map((addr) => createPoolInstance(addr, envConfig))
      appCache.set(`mysql.${dbKey}.slave`, slavePools)
    }
  }
}

function createPoolInstance(address, cfg) {
  const [host, port] = address.split(':')
  return mysql.createPool({
    host,
    port: Number(port) || 3306,
    user: cfg.username,
    password: cfg.password,
    database: cfg.database,
    connectionLimit: cfg.connection || 100,
    waitForConnections: true,
  })
}

export function getMysqlPool(path = 'default.master') {
  const pools = appCache.get(`mysql.${path}`)
  if (!pools || pools.length === 0) {
    throw new Error(`[Server] No active connection pools found for path: ${path}`)
  }

  const index = getRandomIndex(pools.length)
  return pools[index]
}
