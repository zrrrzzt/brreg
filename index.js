var difi = require('difi')
  ;

module.exports = function(opts, callback){
  if(!opts.query) {
    return callback(new Error('Missing required param: query'), null);
  }
  var q = opts.query
    , format = opts.format || 'json'
    , difiOpts = {
        dataset : 'brreg/enhetsregisteret',
        format: format,
        query: {
          query: q
        }
      }
    ;

  difi(difiOpts, function(err, data){
    if(err){
      return callback(err, null);
    }
    return callback(null, data);
  });

};