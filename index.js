const getData = require('./lib/get-data')

module.exports = async options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.query) {
    throw new Error('Missing required input: options.query')
  }

  const difiEnehetsOptions = {
    dataset: 'brreg/enhetsregisteret',
    format: options.format || 'json',
    query: {
      query: options.query
    }
  }

  const difiUnderenhetsOptions = {
    dataset: 'brreg/underenheter',
    format: options.format || 'json',
    query: {
      query: options.query
    }
  }

  try {
    const [enhet, underenhet] = await Promise.all([getData(difiEnehetsOptions), getData(difiUnderenhetsOptions)])
    if (enhet.error !== false) {
      throw new Error(enhet.error.message)
    } else if (underenhet.error !== false) {
      throw new Error(underenhet.error.message)
    } else {
      return {enhetsregisteret: enhet, underenheter: underenhet}
    }
  } catch (error) {
    throw error
  }
}
