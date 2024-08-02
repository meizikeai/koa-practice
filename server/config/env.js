// 开发、测试、正式环境
const env = process.env.NODE_ENV
module.exports.env = env
module.exports.isDev = env === 'development'
module.exports.isPro = env === 'production'

// zookeeper
module.exports.useZookeeper = false
module.exports.release = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
module.exports.test = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
