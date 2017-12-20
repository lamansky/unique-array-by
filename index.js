'use strict'

const uniqueIterableBy = require('unique-iterable-by')

module.exports = (...args) => Array.from(uniqueIterableBy(...args))
