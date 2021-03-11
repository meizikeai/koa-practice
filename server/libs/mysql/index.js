const mysql = require('mysql')
const { promisify } = require('util')
const { createCache, getRandomSubscript } = require('./interval-cache-store')

function getMySQLPool(config, key) {
  const interval = 1000 * 60 * 5

  const pool = createCache(
    `mysql-${key}`,
    () => {
      const mysqlPool = createMysqlPool(config)

      setTimeout(() => {
        try {
          mysqlPool.end()
        } catch (err) {
          console.error(`Close MySQL Error → ${key}, ${err}`)
        }
      }, interval * 2)

      return mysqlPool
    },
    interval
  )

  return pool
}

function createMysqlPool(option) {
  const config = {
    connectionLimit: 10,
    database: option.database,
    password: option.password,
    user: option.username,
  }

  const m = option.master[getRandomSubscript(option.master.length)]
  const one = m.split(':')
  const master = Object.assign(
    {
      host: one[0],
      port: Number(one[1]) || 3306,
    },
    config
  )

  const s = option.slave[getRandomSubscript(option.slave.length)]
  const two = s.split(':')
  const slave = Object.assign(
    {
      host: two[0],
      port: Number(two[1]) || 3306,
    },
    config
  )

  const masterMysqlClient = createPool(master)
  const slaveMysqlClient = createPool(slave)

  return {
    query(sql, ...args) {
      if (/^[\s\r\n]*SELECT\s/i.test(sql)) {
        return slaveMysqlClient.query(sql, ...args)
      } else {
        return masterMysqlClient.query(sql, ...args)
      }
    },
    end() {
      masterMysqlClient.end()
      slaveMysqlClient.end()
    },
  }
}

function createPool({ host, port, user, password, database, connectionLimit }) {
  const pool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    connectionLimit,
  })

  pool.query = promisify(pool.query)

  return pool
}

module.exports = getMySQLPool
