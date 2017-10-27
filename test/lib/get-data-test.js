'use strict'

const tap = require('tap')
const getData = require('../../lib/get-data')

tap.test('Returns data given right input', test => {
  const options = {
    dataset: 'brreg/enhetsregisteret',
    format: 'json',
    query: {
      query: '974778610'
    }
  }
  return getData(options)
    .then(result => {
      tap.equal(result.error, false, 'No errors')
      tap.equal(result.data.entries[0].orgnr, '974778610', 'Expected data returned from input')
      test.done()
    })
    .catch(error => {
      throw error
    })
})

tap.test('Returns no data given right input', test => {
  const options = {
    dataset: 'brreg/underenheter',
    format: 'json',
    query: {
      query: '974760673'
    }
  }
  return getData(options)
    .then(result => {
      tap.equal(result.error, false, 'No errors')
      tap.equal(result.data.entries.length, 0, 'No data returned from input')
      test.done()
    })
    .catch(error => {
      throw error
    })
})

tap.test('Returns false data given wrong input', test => {
  const options = {
    dataset: 'brreg/underbukser',
    format: 'json',
    query: {
      query: '974760673'
    }
  }
  return getData(options)
    .then(result => {
      tap.equal(result.data, false, 'No data returned from input')
      test.done()
    })
    .catch(error => {
      throw error
    })
})
