// 开发、测试、正式环境
const env = process.env.NODE_ENV
module.exports.isLocal = env === 'local'
module.exports.isDev = env === 'development'
module.exports.isPro = env === 'production'

// 在本地使用线上数据库
const dev = process.env.NODE_DEV
module.exports.isLocalPro = dev === 'localPro'

// zookeeper
module.exports.useZookeeper = false
module.exports.release = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
module.exports.test = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
