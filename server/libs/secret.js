import crypto from 'crypto'
import tool from './tool.js'

const secret = {
  bf5d: 'Av7Cc1pfGdKQkJpcJig1Hg==',
}

function HandleServiceEncrypt(ak, p) {
  const cipher = HandleEncrypt(ak, p)
  const result = tool.BinaryToBase64(tool.HexToBuffer(cipher))
  return result
}

function HandleServiceDecrypt(c) {
  const data = tool.BufferToHex(tool.Base64ToBinary(c))
  const result = HandleDecrypt(data)
  return result
}

function HandleEncrypt(ak, p) {
  const iv = crypto.randomBytes(16)
  const key = tool.Base64ToBinary(secret[ak])

  const ciphertext = EncryptAes128CBC(p, key, iv)

  const pos = parseInt(ak.slice(0, 1), 16)

  const result = ak + ciphertext.slice(0, pos) + iv.toString('hex') + ciphertext.slice(pos, ciphertext.length)
  // console.log(result)

  return result
}

function HandleDecrypt(c) {
  const ak = c.slice(0, 4)
  const enc = c.slice(4, c.length)

  const pos = parseInt(ak.slice(0, 1), 16)

  const iv = tool.HexToBuffer(enc.slice(pos, pos + 32))
  const key = tool.Base64ToBinary(secret[ak])
  const cipher = enc.slice(0, pos) + enc.slice(pos + 32, enc.length)

  const plaintext = DecryptAes128CBC(cipher, key, iv)
  // console.log(plaintext)

  return plaintext
}

function EncryptAes128CBC(plainText, key, iv) {
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv)
  const ciphertext = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()])
  const result = ciphertext.toString('hex')
  return result
}

function DecryptAes128CBC(ciphertext, key, iv) {
  const cipherBuffer = tool.HexToBuffer(ciphertext)
  const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv)
  const plainText = Buffer.concat([cipher.update(cipherBuffer), cipher.final()])
  const result = plainText.toString('utf8')
  return result
}

export default { HandleServiceEncrypt, HandleServiceDecrypt }
