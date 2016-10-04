'use strict'

const difi = require('difi')

module.exports = (options, callback) => {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.query) {
    return callback(new Error('Missing required input: options.query'), null)
  }

  const difiOptions = {
    dataset: 'brreg/enhetsregisteret',
    format: options.format || 'json',
    query: {
      query: options.query
    }
  }

  difi(difiOptions, (error, data) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, data)
    }
  })
}
