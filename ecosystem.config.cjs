// usage: pm2 start ecosystem.config.js
// usage: pm2 start ecosystem.config.js --env development

const process = require('node:process')
const env = process.argv.includes('development') ? 'development' : 'production'

const baseConfig = {
  name: 'koa-practice',
  script: '/home/work/koa-practice/server/index.js',
  autorestart: true,
  max_memory_restart: '1G',
  error_file: '/data/logs/pm2/koa-practice/error.log',
  out_file: '/data/logs/pm2/koa-practice/out.log',
  log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  merge_logs: true,
  ignore_watch: ['node_modules'],
}
const testConfig = {
  ...baseConfig,
  instances: 1,
  exec_mode: 'fork',
  watch: true,
  env: { NODE_ENV: 'development' },
}
const releaseConfig = {
  ...baseConfig,
  instances: 'max',
  exec_mode: 'cluster',
  watch: false,
  env: { NODE_ENV: 'production' },
}
const finalConfig = env === 'development' ? testConfig : releaseConfig

module.exports = {
  apps: [finalConfig],
}
