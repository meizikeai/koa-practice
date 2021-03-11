let device = false

if (typeof window !== 'undefined') {
  const result = window.CONFIG.device
  device = result
} else if (typeof global !== 'undefined') {
  const result = global.KoaPractice.device
  device = result
}

module.exports = device
