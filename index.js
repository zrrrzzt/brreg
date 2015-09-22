'use strict'

var difi = require('difi')

module.exports = function lookupBRREG (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }
  if (!options.query) {
    return callback(new Error('Missing required input: options.query'), null)
  }
  var q = options.query
  var format = options.format || 'json'
  var difiOpts = {
    dataset: 'brreg/enhetsregisteret',
    format: format,
    query: {
      query: q
    }
  }

  difi(difiOpts, function (err, data) {
    if (err) {
      return callback(err, null)
    } else {
      return callback(null, data)
    }
  })
}
