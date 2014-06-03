#brreg [![Build Status](https://travis-ci.org/zrrrzzt/brreg.svg?branch=master)](https://travis-ci.org/zrrrzzt/brreg)

Node.js module/CLI for looking up data from the Norwegian Entity Registry.

It makes use of the 'brreg/enhetsregisteret' dataset from [hotell.difi.no API](http://hotell.difi.no/api).

##Installation##

```
$ npm install brreg
```

You can also install it globally to use the CLI version.

```
$ npm install brreg -g
```

##Test##

Make sure you have installed [Mocha](http://visionmedia.github.io/mocha/) globally or go to the brreg folder and do an nmp install.

```
$ npm test
```

##Usage module

Pass an object with the required property and receive the result.

**query** String you want to query.

Optional you can specify format for the data returned.

**format** Format for the result. Can be csv, json, jsonp, xml or yaml. json is default.

```javascript
var brreg = require('brreg')
  , opts = {
      query:'Pythonia'
    }
  ;

brreg(opts, function(err, data){
  if(err)throw err;
  console.log(data);
});
```

##Usage - CLI

To use it as a CLI app install it globally.

```
$ brreg <query>
```

Optional you can specify format.

Valid options: csv, json, jsonp, xml and yaml (default)

```
$ brreg <query> --format=csv
```

To display help

```
$ brreg --help
```

To display version

```
$ brreg --version
```
