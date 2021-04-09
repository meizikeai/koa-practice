const mysql = require('mysql')

function getMySQLPool(data) {
  const config = getMysqlConfig(data)
  const pool = createMysqlPool(config)

  return pool
}

function createMysqlPool(option) {
  const config = {
    connectionLimit: 10,
    user: option.username,
    password: option.password,
    database: option.database,
  }

  const master = Object.assign(
    {
      host: option.master.host,
      port: Number(option.master.port) || 3306,
    },
    config
  )

  const client = createPool(master)

  return client
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

  return pool
}

function getMysqlConfig(data) {
  let target = Object.assign({}, data)

  const m = target.master[getRandomSubscript(target.master.length)]
  const one = m.split(':')

  target.master = {
    host: one[0],
    port: one[1],
  }

  return target
}

function getRandomSubscript(len) {
  return Math.floor(Math.random() * len + 1) - 1
}

module.exports = getMySQLPool
