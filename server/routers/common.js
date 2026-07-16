import Router from '@koa/router'
import { common } from '../controllers/index.js'

const router = new Router()

// common
router.get('/', common.home)
router.get('/403', common.forbidden)
router.get('/404', common.notFound)

export default router
