'use strict'

const brreg = require('../../index')
const tap = require('tap')

tap.test('Requires an options object', test => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  return brreg(options)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Requires query to be specified', test => {
  const options = {}
  const expectedErrorMessage = 'Missing required input: options.query'
  return brreg(options)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
})

tap.test('Returns error message illegal format requested', test => {
  const options = {
    'query': 'npmlovesyou-doyoulovenpm',
    'format': 'cucumber'
  }
  const expectedErrorMessage = 'Illegal format requested'
  return brreg(options)
    .then(result => {
      tap.equal(result.enhetsregisteret.error.message, expectedErrorMessage, expectedErrorMessage)
      tap.equal(result.underenheter.error.message, expectedErrorMessage, expectedErrorMessage)
      test.done()
    })
    .catch(error => {
      throw error
    })
})

tap.test('Returns json if format is json', test => {
  const options = {
    query: '994528130'
  }
  brreg(options)
    .then(data => {
      tap.equal(data.enhetsregisteret.data.entries[0].orgnr, '994528130', 'Expected data returned from json')
      test.done()
    })
    .catch(error => {
      throw error
    })
})
