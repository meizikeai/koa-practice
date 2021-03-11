const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const getRandomSubscript = (len) => Math.floor(Math.random() * len + 1) - 1

module.exports = {
  getRandomNumber,
  getRandomSubscript,
}
