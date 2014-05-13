
var balanced = require('balanced-match')
var color = require('css-color-function')

module.exports = function colors(css) {
  while (true) {
    var index = css.indexOf('color(')
    if (!~index) return css

    var string = css.slice(index)
    var end = [string.indexOf('}'), string.indexOf(';')].filter(exists)
    if (!end.length) throw new Error('no CSS rule end at' + string)
    string = string.slice(0, Math.min.apply(null, end))

    css = css.replace(string, convert(string))
  }

  function convert(string) {
    if (!string) return ''
    var ret = balanced('(', ')', string)
    if (!ret) throw new Error('unbalanced ()s at ' + string)
    var fn = 'color(' + ret.body + ')'
    return color.convert(fn) + ret.post
  }
}

function exists(index) {
  return ~index
}
