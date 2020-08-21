const dev = process.env.NODE_DEV
const env = process.env.NODE_ENV

module.exports.isLocal = env === 'local'
module.exports.isDev = env === 'development'
module.exports.isPro = env === 'production'

module.exports.isLocalPro = dev === 'localPro'
