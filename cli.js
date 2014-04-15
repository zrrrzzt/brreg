#!/usr/bin/env node
'use strict';

var brreg = require('./index')
  , pkg = require('./package.json')
  , query = process.argv[2]
  , format = 'yaml'
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ brreg <query>');
  console.log('');
  console.log('Optional, specify format of returned data');
  console.log('Valid options: csv, json, jsonp, xml, yaml (default)');
  console.log('  $ brreg <query> --format=<format>');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if (process.argv[3] && (process.argv[3].indexOf('-f') !== -1 || process.argv[3].indexOf('--format') !== -1)) {
  format = process.argv[3].split('=')[1];
}

brreg({query:query, format:format}, function(err, data){
  if(err) throw err;
  console.log(data);
});