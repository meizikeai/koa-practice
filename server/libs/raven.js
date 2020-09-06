const raven = require('raven')
const { isPro, isLocalPro, isDev } = require('../config/env')

const ravenUrl = !isLocalPro && (isPro || isDev) ? '' : ''

raven.disableConsoleAlerts()

module.exports = raven.config(ravenUrl).install()
