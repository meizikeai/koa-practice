import Router from '@koa/router'
import { common, test } from '../controllers/index.js'

const router = new Router()
// test
router.get('/demo', test.demo)
router.get('/json', test.json)
router.get('/string', test.string)

router.get('/api/json', common.auth, test.json)

export default router
