import jwt from 'jsonwebtoken'
import tool from './tool.js'
import { env } from '../config/env.js'

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

function HandleJsonWebTokenEncrypt(uid, expiration) {
  let exp = expiration

  if (expiration <= 0) {
    exp = 3196800
  }

  const secret = tool.Base64ToBinary(jwtRsaKey[env].private).toString('utf-8')
  const times = Math.floor(Date.now() / 1000)
  const result = jwt.sign(
    {
      app: 1,
      exp: times + exp,
      iat: times,
      uid: uid,
    },
    secret,
    { algorithm: 'RS256' }
  )

  return result
}

function HandleJsonWebTokenDecrypt(token) {
  let decoded = null
  const cert = tool.Base64ToBinary(jwtRsaKey[env].public).toString('utf-8')

  try {
    decoded = jwt.verify(token, cert)
  } catch (err) {
    console.log(err)
  }

  return decoded
}

export default { HandleJsonWebTokenEncrypt, HandleJsonWebTokenDecrypt }
