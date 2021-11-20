const brreg = require('../../index')
const tap = require('tap')

tap.test('Requires an options object', test => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options'
  return brreg(options)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Requires query to be specified', test => {
  const options = {}
  const expectedErrorMessage = 'Missing required input: options.query'
  return brreg(options)
    .then(console.log)
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Returns error message illegal format requested', test => {
  const options = {
    query: 'npmlovesyou-doyoulovenpm',
    format: 'cucumber'
  }
  const expectedErrorMessage = 'Illegal format requested'
  return brreg(options)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
      test.end()
    })
})

tap.test('Returns json if format is json', test => {
  const options = {
    query: '994528130'
  }
  brreg(options)
    .then(data => {
      tap.equal(data.enhetsregisteret.data.entries[0].orgnr, '994528130', 'Expected data returned from json')
      test.end()
    })
    .catch(error => {
      throw error
    })
})
