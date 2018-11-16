const difi = require('difi')

module.exports = async options => {
  try {
    const data = await difi(options)
    return { data: data, error: false }
  } catch (error) {
    return { data: false, error: error }
  }
}
