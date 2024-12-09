import fs from 'fs'
import path from 'path'
import pino from 'pino'
import { createStream } from 'rotating-file-stream'
import { isPro } from '../config/env.js'

const support = ['.log']
const LogFileName = ['error.log', 'warn.log', 'info.log', 'debug.log', 'trace.log']
const directory = (() => {
  let pwd = process.cwd()

  if (isPro == true) {
    pwd = '/data/logs/apm-practice'
  } else {
    pwd = path.resolve(pwd, 'logs')
  }

  if (!fs.existsSync(pwd)) {
    fs.mkdirSync(pwd)
  }

  return pwd
})()

const createRotatingStream = (filename) => {
  return createStream(filename, {
    interval: '1d',
    path: directory,
  })
}

function customTimestamp() {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const createLogger = (stream) => {
  return pino(
    {
      base: null,
      timestamp: () => `,"time":"${customTimestamp()}"`,
    },
    pino.multistream(stream)
  )
}

const errorLogger = createLogger(createRotatingStream('error.log'))
const warnLogger = createLogger(createRotatingStream('warn.log'))
const infoLogger = createLogger(createRotatingStream('info.log'))
const debugLogger = createLogger(createRotatingStream('debug.log'))
const traceLogger = createLogger(createRotatingStream('trace.log'))

const logger = {
  error: (msg) => {
    errorLogger.info(msg)
    errorLogger.flush()
  },
  warn: (msg) => {
    warnLogger.info(msg)
    warnLogger.flush()
  },
  info: (msg) => {
    infoLogger.info(msg)
    infoLogger.flush()
  },
  debug: (msg) => {
    debugLogger.info(msg)
    debugLogger.flush()
  },
  trace: (msg) => {
    traceLogger.info(msg)
    traceLogger.flush()
  },
}

const HanldeFindFile = (directory) => {
  let result = []

  const stat = fs.statSync(directory)

  if (stat.isFile()) {
    result.push(directory)
    return result
  }

  const data = fs.readdirSync(directory, { withFileTypes: true })

  for (const item of data) {
    if (item.isFile()) {
      if (LogFileName.includes(item.name) == true) {
        continue
      }

      const ext = path.extname(item.name)

      if (support.includes(ext) == true) {
        result.push(path.join(directory, item.name))
      }
    } else if (item.isDirectory()) {
      result = result.concat(HanldeFindFile(path.join(directory, item.name)))
    }
  }

  const now = Date.now()
  const maxAge = 7 * 24 * 60 * 60 * 1000 // 7天

  result.forEach((file) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        console.error(`Unable to get file status: ${err.message}`)
        return
      }

      if (now - stats.mtimeMs > maxAge) {
        fs.unlink(file, (err) => {
          if (err) {
            console.error(`Unable to delete file: ${err.message}`)
            return
          }
          console.log(`Deleting expired log files: ${file}`)
        })
      }
    })
  })
}

// every 12 hours
setInterval(() => HanldeFindFile(directory), 12 * 60 * 60 * 1000)

export default logger
