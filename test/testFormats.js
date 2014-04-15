var brreg = require('../index')
  , assert = require('assert')
  , opts = {
      query: '994528130'
    }
  ;

describe('brreg - formats', function(){

  it('Should have a length of 616 if format is json', function(done){
    opts.format = 'json';
    brreg(opts, function(err, data){
      assert.equal(data.length, 616);
      done();
    });
  });

});