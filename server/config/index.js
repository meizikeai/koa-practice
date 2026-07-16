// env
export const env = process.env.NODE_ENV
export const isDev = env === 'development'
export const isPro = env === 'production'

// mysql config
export const mysql = {
  default: {
    development: {
      master: ['127.0.0.1:3306'],
      slave: ['127.0.0.1:3306', '127.0.0.1:3306'],
      username: 'root',
      password: 'your@password',
      database: 'test',
      connection: 20,
    },
    production: {
      master: ['127.0.0.1:3306'],
      slave: ['127.0.0.1:3306', '127.0.0.1:3306'],
      username: 'root',
      password: 'your@password',
      database: 'test',
      connection: 100,
    },
  },
}

// redis config
export const redis = {
  default: {
    development: {
      master: ['127.0.0.1:6379'],
      password: '',
    },
    production: {
      master: ['127.0.0.1:6379'],
      password: '',
    },
  },
}
