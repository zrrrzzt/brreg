var brreg = require('../index')
  , assert = require('assert')
  ;

describe('brreg - inputs', function(){

  it('Should throw if query is not specified', function(done){
    var opts = {};
    brreg(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: query/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

});