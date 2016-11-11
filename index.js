'use strict'

const difi = require('difi')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      let error = new Error('Missing required input: options')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
    }
    if (!options.query) {
      let error = new Error('Missing required input: options.query')
      if (callback) {
        return callback(error, null)
      }
      reject(error)
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
        if (callback) {
          return callback(error, null)
        }
        reject(error)
      } else {
        if (callback) {
          return callback(null, data)
        }
        resolve(data)
      }
    })
  })
}
