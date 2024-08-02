const Router = require('koa-router')
const common = require('../controllers/common')
const test = require('../controllers/test')

const router = new Router()

// test
router.get('/json', test.json)
router.get('/string', test.string)
router.get('/demo', test.demo)

router.get('/api/json', common.auth, test.json)

module.exports = router
