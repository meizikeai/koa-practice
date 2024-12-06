function BinaryToBase64(binary) {
  return Buffer.from(binary).toString('base64')
}

function Base64ToBinary(base64) {
  return Buffer.from(base64, 'base64')
}

function HexToBuffer(hexString) {
  return Buffer.from(hexString, 'hex')
}

function BufferToHex(buffer) {
  return buffer.toString('hex')
}

export default { BinaryToBase64, Base64ToBinary, HexToBuffer, BufferToHex }
