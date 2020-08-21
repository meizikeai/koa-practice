const { mysql, redis, server } = require('./qconf')

const datum = {
  commonMySQL: {
    qconf: mysql.common,
    database: 'common',
  },

  commonRedis: {
    qconf: redis.common,
  },

  commonServer: {
    qconf: server.common,
  },
}

module.exports = datum