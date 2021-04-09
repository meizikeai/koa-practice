const logger = require('../libs/logger')
const { mysqlClient, redisClient } = require('../libs/connect')
const mysql = require('../libs/mysql')

module.exports = {
  // 数据结构
  // CREATE TABLE `test_user` (
  //   `id` int NOT NULL AUTO_INCREMENT COMMENT '序列号',
  //   `email` varchar(50) NOT NULL DEFAULT '' COMMENT '用户帐号',
  //   `name` varchar(20) NOT NULL DEFAULT '' COMMENT '用户姓名',
  //   `type` int NOT NULL DEFAULT '1' COMMENT '用户类型',
  //   `status` int NOT NULL DEFAULT '1' COMMENT '帐户状态',
  //   `cipher` int NOT NULL DEFAULT '1' COMMENT '密码修改提示',
  //   `salt` varchar(256) NOT NULL DEFAULT '' COMMENT '随机密钥的一半',
  //   `password` varchar(256) NOT NULL DEFAULT '' COMMENT '用户密码',
  //   `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  //   PRIMARY KEY (`id`),
  //   UNIQUE KEY `email` (`email`)
  // ) ENGINE=InnoDB AUTO_INCREMENT=1000002 DEFAULT CHARSET=utf8;

  async getAnchors() {
    const commonMySQL = mysqlClient('default')

    const selectSQL = `SELECT * FROM test_user limit 0 ,10`
    const anchors = await commonMySQL.query(selectSQL).catch((err) => {
      logger.error(err, { tips: 'test -> query error' })
    })

    logger.info({ notice: anchors })

    return anchors
  },
  async getUser() {
    const commonRedis = redisClient('default')

    const anchors = await commonRedis.hgetall('u:113').catch((err) => {
      logger.error(err, { tips: 'test -> query error' })
    })

    logger.info({ notice: anchors })

    return anchors
  },
  // 尝试事务
  tryBegin() {
    const pool = mysql({
      master: ['127.0.0.1:3306'],
      username: 'root',
      password: 'yintai@123',
      database: 'test',
    })

    // pool.query('SELECT * FROM test_user limit 0 ,10', '', (err, res) => {
    //   console.log(res)
    // })

    pool.getConnection((err, conn) => {
      if (err) {
        throw err
      }

      conn.beginTransaction((err) => {
        if (err) return done(err)

        conn.query('SELECT * FROM test_user limit 0 ,10', '', (err, res) => {
          if (err) {
            throw err
          }

          console.log(res)
        })
      })
    })
  },
}
