import Router from 'koa-router'
import common from '../controllers/common.js'
import test from '../controllers/test.js'

const router = new Router()

// common
router.get('/', common.home)
router.get('/403', common.forbidden)
router.get('/404', common.notFound)

// test
router.get('/demo', test.demo)
router.get('/json', test.json)
router.get('/string', test.string)

router.get('/api/json', common.auth, test.json)

export default router
