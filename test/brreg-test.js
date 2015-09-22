'use strict'

var brreg = require('../index')
var tap = require('tap')

tap.test('Requires an options object', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options'
  brreg(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires query to be specified', function (test) {
  var options = {}
  var expectedErrorMessage = 'Missing required input: options.query'
  brreg(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Returns error message illegal format requested', function (test) {
  var options = {
    'query': 'npmlovesyou-doyoulovenpm',
    'format': 'cucumber'
  }
  var expectedErrorMessage = 'Illegal format requested'
  brreg(options, function (error, data) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Returns json if format is json', function (test) {
  var options = {
    query: '994528130'
  }
  brreg(options, function (error, data) {
    if (error) {
      throw error
    }
    tap.equal(data.entries[0].orgnr, '994528130', 'Expected data returned from json')
    test.done()
  })
})
