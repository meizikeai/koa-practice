const Router = require('koa-router')
const common = require('../controllers/common')

const router = new Router()

// common
router.get('/', common.home)
router.get('/403', common.forbidden)
router.get('/404', common.notFound)

module.exports = router