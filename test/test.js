var add = require('../src/code.js').add;
var sub = require('../src/sub.js').sub;

describe('add', function () {
  it('add 1 + 2', function () {
    assert.equal(add(1, 2), 3);
  });

  // it('add null and null', function () {
  //   assert.throws(function () {
  //     add(null, undefined)
  //   })
  // });

  // it('add 1 and null', function () {
  //   assert.throws(function () {
  //     add(1, undefined)
  //   })
  // });

});


