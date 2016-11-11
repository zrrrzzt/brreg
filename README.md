[![Build Status](https://travis-ci.org/zrrrzzt/brreg.svg?branch=master)](https://travis-ci.org/zrrrzzt/brreg)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/brreg/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/brreg?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# brreg

Node.js module for looking up data from the Norwegian Entity Registry.

It makes use of the 'brreg/enhetsregisteret' dataset from [hotell.difi.no API](http://hotell.difi.no/api).

## Installation

From npm

```
$ npm install brreg --save
```

## Usage

Pass an object with the required property and receive the result.

**query** String you want to query.

Optional you can specify format for the data returned.

**format** Format for the result. Can be csv, json, jsonp, xml or yaml. json is default.

### Callback example

```javascript
'use strict'

const brreg = require('brreg')
const options = {
  query:'Pythonia'
}

brreg(options, (error, data) => {
  if (error) {
    throw error
  } else {
    console.log(JSON.stringify(data))
  }
})
```

### Promises example

```javascript
'use strict'

const brreg = require('brreg')
const options = {
  query:'Pythonia'
}

brreg(options)
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
```

## Related

- [brreg-cli](https://github.com/zrrrzzt/brreg-cli) The CLI for this module
