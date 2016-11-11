'use strict'

const brreg = require('../../index')
const tap = require('tap')

tap.test('Requires an options object', function (test) {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  return brreg(options)
    .then(data => {

    })
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Requires query to be specified', function (test) {
  const options = {}
  const expectedErrorMessage = 'Missing required input: options.query'
  return brreg(options)
    .then(data => {

    })
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Returns error message illegal format requested', function (test) {
  const options = {
    'query': 'npmlovesyou-doyoulovenpm',
    'format': 'cucumber'
  }
  const expectedErrorMessage = 'Illegal format requested'
  return brreg(options)
    .then(data => {

    })
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Returns json if format is json', function (test) {
  const options = {
    query: '994528130'
  }
  brreg(options)
    .then(data => {
      tap.equal(data.entries[0].orgnr, '994528130', 'Expected data returned from json')
      test.done()
    })
    .catch(error => {
      throw error
    })
})
