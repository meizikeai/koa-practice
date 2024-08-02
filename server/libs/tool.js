// 二进制 to Base64
function binaryToBase64(binary) {
  return Buffer.from(binary).toString('base64')
}

// Base64 to 二进制
function base64ToBinary(base64) {
  return Buffer.from(base64, 'base64')
}

// 十六进制 to 二进制
function hexToBuffer(hexString) {
  return Buffer.from(hexString, 'hex')
}

// 二进制 to 十六进制
function bufferToHex(buffer) {
  return buffer.toString('hex')
}

module.exports = { binaryToBase64, base64ToBinary, hexToBuffer, bufferToHex }
