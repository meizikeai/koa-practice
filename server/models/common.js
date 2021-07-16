const logger = require('../libs/logger')
const { mysqlClient, redisClient, serverClient } = require('../libs/connect')

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
    const testhost = serverClient('send')
    console.log(`http://${testhost}`)

    const commonMySQL = mysqlClient('default.master')

    const selectSQL = `SELECT * FROM test_user limit 0 ,10`
    const [result] = await commonMySQL.query(selectSQL).catch((err) => {
      logger.error(err, { tips: 'test -> query error' })
    })

    logger.info({ notice: result })

    return result
  },
  async getUser() {
    const defaultRedis = redisClient('default.master')

    const anchors = await defaultRedis.hgetall('u:113').catch((err) => {
      logger.error(err, { tips: 'test -> query error' })
    })

    logger.info({ notice: anchors })

    // 使用 pipeline
    const pipeline = defaultRedis.pipeline()

    pipeline.hset('u:133', 'test', '测试一下')
    // pipeline.hdel('u:133', 'test')
    pipeline.hget('u:133', 'test')
    pipeline.exec((err, result) => {
      console.log(err, result)
    })

    return anchors
  },
  // 尝试事务
  async tryBegin() {
    const pool = mysqlClient('default.master')

    pool.getConnection().then((promiseConnection) => {
      var conn = promiseConnection.connection

      conn.beginTransaction(async (err) => {
        const [a] = await pool.query('SELECT * FROM test_user limit 0 ,10').catch((err) => {
          logger.error(err, { tips: 'test -> query error' })
        })
        logger.info({ a: 1, notice: a })

        const [b] = await pool.query('SELECT * FROM test_user limit 0 ,10').catch((err) => {
          logger.error(err, { tips: 'test -> query error' })
        })
        logger.info({ b: 1, notice: b })
      })
    })
  },
}
