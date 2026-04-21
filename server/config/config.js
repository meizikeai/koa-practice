// env
export const env = process.env.NODE_ENV
export const isDev = env === 'test'
export const isPro = env === 'release'

export const mysql = {
  test: {
    default: {
      master: ['127.0.0.1:3306'],
      slave: ['127.0.0.1:3306', '127.0.0.1:3306', '127.0.0.1:3306'],
      username: 'root',
      password: 'yintai@123',
      database: 'test',
      connection: 100,
    },
  },
  release: {
    default: {
      master: ['127.0.0.1:3306'],
      slave: ['127.0.0.1:3306', '127.0.0.1:3306', '127.0.0.1:3306'],
      username: 'root',
      password: 'yintai@123',
      database: 'test',
      connection: 100,
    },
  },
}

export const redis = {
  test: {
    default: {
      master: ['127.0.0.1:6379'],
      password: '',
      family: 4,
      db: 0,
    },
  },
  release: {
    default: {
      master: ['127.0.0.1:6379'],
      password: '',
      family: 4,
      db: 0,
    },
  },
}
