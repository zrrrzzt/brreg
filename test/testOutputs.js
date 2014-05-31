var brreg = require('../index')
  , assert = require('assert')
  , opts = {
      query: '994528130'
    }
  ;

describe('brreg - outputs', function(){

  it('Should return pages: 1 when queried for 994528130', function(done){
    opts.format = 'json';
    brreg(opts, function(err, data){
      var result = JSON.parse(data)
        ;
      assert.equal(result.pages, 1);
      done();
    });
  });

});