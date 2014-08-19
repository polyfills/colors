
# Colors

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]


A simpler implementation of the [proposed color function](http://dev.w3.org/csswg/css-color/#modifying-colors).
This is basically [rework-color-function](https://github.com/ianstormtaylor/rework-color-function) without the [rework](https://github.com/reworkcss/rework) dependency.
Thus, it is faster and has no dependencies.

## Installation

```
npm i css-colors
```

## Usage

```bash
var colors = require('css-colors')

css = colors(css)
```

[npm-image]: https://img.shields.io/npm/v/css-colors.svg?style=flat-square
[npm-url]: https://npmjs.org/package/css-colors
[github-tag]: http://img.shields.io/github/tag/polyfills/colors.svg?style=flat-square
[github-url]: https://github.com/polyfills/colors/tags
[travis-image]: https://img.shields.io/travis/polyfills/colors.svg?style=flat-square
[travis-url]: https://travis-ci.org/polyfills/colors
[coveralls-image]: https://img.shields.io/coveralls/polyfills/colors.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/polyfills/colors?branch=master
[david-image]: http://img.shields.io/david/polyfills/colors.svg?style=flat-square
[david-url]: https://david-dm.org/polyfills/colors
[license-image]: http://img.shields.io/npm/l/css-colors.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/css-colors.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/css-colors
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
