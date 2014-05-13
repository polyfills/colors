
var fs = require('fs')
var assert = require('assert')

var colors = require('..')

describe('CSS Colors', function () {
  it('should pass with rework-color-function\'s tests', function () {
    test('rework')
  })

  it('should throw on unexpected ends', function () {
    assert.throws(function () {
      colors(fixture('unexpected-end'))
    })
  })

  it('should throw on unbalanced ()\'s', function () {
    assert.throws(function () {
      colors(fixture('unbalanced'))
    })
  })
})

function test(name) {
  var expected = fixture(name + '.out').trim()
  var returned = colors(fixture(name)).trim()
  assert.equal(expected, returned)
}

function fixture(name) {
  return fs.readFileSync(__dirname + '/fixtures/' + name + '.css', 'utf8')
}
