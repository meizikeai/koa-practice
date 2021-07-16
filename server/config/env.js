// 开发、测试、正式环境
const env = process.env.NODE_ENV
module.exports.isLocal = env === 'local'
module.exports.isDev = env === 'development'
module.exports.isPro = env === 'production'

// 在本地使用线上数据库
const dev = process.env.NODE_DEV
module.exports.isLocalPro = dev === 'localPro'

// zookeeper
module.exports.useZookeeper = true
module.exports.release = ['10.10.182.158:2181', '10.10.101.151:2181', '10.10.102.25:2181']
module.exports.test = ['10.9.158.210:2181', '10.9.114.167:2181', '10.9.105.4:2181']
