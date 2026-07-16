import { getMysqlPool } from '../libs/mysql.js'

export default class MysqlModel {
  static async test() {
    const client = getMysqlPool('default.master')
    const [result] = await client.query('SELECT 1 + 1 AS solution')
    return result
  }
}
