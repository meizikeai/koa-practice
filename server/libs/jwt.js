// server/libs/jwt.js
import jwt from 'jsonwebtoken'
import { env } from '../config/index.js'

// generate jwt key
// openssl genrsa -out private.key 2048
// openssl rsa -in private.key -pubout -out public.key
const jwtRsaKey = {
  development: {
    private: '',
    public: '',
  },
  production: {
    private: '',
    public: '',
  },
}

export function handleJsonWebTokenEncrypt(uid, expiration) {
  let exp = expiration

  if (expiration <= 0) {
    exp = 3196800
  }

  const secret = base64ToBuffer(jwtRsaKey[env].private).toString('utf-8')
  const times = Math.floor(Date.now() / 1000)
  const result = jwt.sign(
    {
      app: 1,
      exp: times + exp,
      iat: times,
      uid: uid,
    },
    secret,
    { algorithm: 'RS256' },
  )

  return result
}

export function handleJsonWebTokenDecrypt(token) {
  let decoded = null
  const cert = base64ToBuffer(jwtRsaKey[env].public).toString('utf-8')

  try {
    decoded = jwt.verify(token, cert)
  } catch (err) {
    console.log(err)
  }

  return decoded
}

export const base64ToBuffer = (base64) => Buffer.from(base64, 'base64')
