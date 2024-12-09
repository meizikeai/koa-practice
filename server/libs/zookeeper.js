import ZooKeeper from 'zookeeper'
import zk from '../config/zk.js'
import { setCache, getCache, getRandom } from './cache.js'
import { isPro, release, test, useZookeeper } from '../config/env.js'

function getZkConfig() {
  let zk = test

  if (isPro) {
    zk = release
  }

  const key = getRandom(zk.length)
  const result = zk[key]

  return result
}

/**
 * @param timeoutMs {number}
 * @returns {ZooKeeper}
 */
function createClient(timeoutMs = 5000) {
  const config = {
    connect: getZkConfig(),
    timeout: timeoutMs,
    debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN,
    host_order_deterministic: false,
  }

  let client = new ZooKeeper(config)

  client.on('close', () => {
    console.log('close', `session closed, id=${client.client_id}`)
    client = null
  })

  client.on('connecting', () => {
    console.log('connecting', `session connecting, id=${client.client_id}`)
  })

  client.on('connect', () => {
    console.log('connect', `session connect, id=${client.client_id}`)
  })

  client.init(config)

  return client
}

async function handleZookeeper() {
  if (!useZookeeper) {
    return
  }

  const client = createClient()

  client.on('connect', async () => {
    const [mysql, redis, server] = await Promise.all([
      await getMySQL(client),
      await getRedis(client),
      await getServer(client),
    ])

    setCache('mysql', mysql)
    setCache('redis', redis)
    setCache('server', server)

    client.close()
  })
}

async function getMySQL(client) {
  const result = {}

  for (const key in zk.mysql) {
    const path = zk.mysql[key]
    const mysql = {
      master: [],
      slave: [],
      username: '',
      password: '',
      database: '',
    }
    const res = await client.get_children(path, false)
    const back = []

    res.forEach((val) => {
      switch (val) {
        case 'master':
          back[0] = 'master'
          break
        case 'slave':
          back[1] = 'slave'
          break
        case 'username':
          back[2] = 'username'
          break
        case 'password':
          back[3] = 'password'
          break
        case 'database':
          back[4] = 'database'
          break
      }
    })

    const [master, slave, username, password, database] = await Promise.all([
      await client.get_children(path + '/' + back[0], false),
      await client.get_children(path + '/' + back[1], false),
      await client.get(path + '/' + back[2], false).then((data) => {
        return data[1].toString()
      }),
      await client.get(path + '/' + back[3], false).then((data) => {
        return data[1].toString()
      }),
      await client.get(path + '/' + back[4], false).then((data) => {
        return data[1].toString()
      }),
    ])

    mysql.master = master
    mysql.slave = slave
    mysql.username = username
    mysql.password = password
    mysql.database = database

    console.log('Children of %s are: %j.', path, mysql)

    result[key] = mysql
  }

  return result
}

async function getRedis(client) {
  const result = {}

  for (const key in zk.redis) {
    const path = zk.redis[key]
    const redis = {
      master: [],
      password: '',
      db: 0,
    }
    const res = await client.get_children(path, false)

    redis.master = res

    console.log('Children of %s are: %j.', path, res)

    result[key] = redis
  }

  return result
}

async function getServer(client) {
  const result = {}

  for (const key in zk.server) {
    const path = zk.server[key]
    const master = await client.get_children(path, false)

    console.log('Children of %s are: %j.', path, master)

    result[key] = master
  }

  return result
}

async function awaitZookeeper() {
  return await new Promise((resolve) => {
    if (!useZookeeper) {
      resolve(false)
      return
    }

    console.log('Server use zookeeper ...')

    const timer = setInterval(() => {
      const mysql = getCache('mysql')
      const redis = getCache('redis')
      const server = getCache('server')

      if (typeof mysql === 'object' && typeof redis === 'object' && typeof server === 'object') {
        resolve(true)
        clearInterval(timer)
      }
    }, 30)
  })
}

export { awaitZookeeper, handleZookeeper }
