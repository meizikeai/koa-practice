// environments
export const env = process.env.NODE_ENV
export const isDev = env === 'development'
export const isPro = env === 'production'

// zookeeper
export const useZookeeper = false
export const release = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
export const test = ['127.0.0.1:2181', '127.0.0.1:2181', '127.0.0.1:2181']
