const Router = require('koa-router')
const test = require('../controllers/test')

const router = new Router()

// test
router.get('/json', test.json)
router.get('/string', test.string)
router.get('/demo', test.demo)

module.exports = router