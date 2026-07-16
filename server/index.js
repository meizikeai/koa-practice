// server.js
import { bootstrap } from './app.js'

const port = process.env.PORT || 8000

async function startServer() {
  try {
    const app = await bootstrap()
    const server = app.listen(port, () => {
      console.log(`[Server] Active and running on http://127.0.0.1:${port}`)
    })

    // uncaught exceptions
    process.on('uncaughtException', (err) => {
      console.error('Fatal: Uncaught Exception detected!', err)

      server.close(() => {
        process.exit(1)
      })
    })

    // unhandled rejections
    process.on('unhandledRejection', (reason, promise) => {
      console.warn('Warning: Unhandled Promise Rejection at:', promise, 'reason:', reason)
      server.close(() => {
        process.exit(1)
      })
    })

    process.on('SIGINT', () => {
      console.log('[Server] Stopping server safely...')
      server.close(() => {
        process.exit(0)
      })
    })
  } catch (err) {
    console.error('[Server Error] Failed to initialize server:', err)
    process.exit(1)
  }
}

startServer()
