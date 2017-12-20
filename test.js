'use strict'

const assert = require('assert')
const uniqueArrayBy = require('.')

describe('uniqueArrayBy()', function () {
  it('should return an array', function () {
    assert(Array.isArray(uniqueArrayBy([], 0)))
  })

  it('should support an index', function () {
    const u = uniqueArrayBy([[1], [1]], 0)
    assert.strictEqual(u.length, 1)
    assert.strictEqual(u[0][0], 1)
  })

  it('should support a callback', function () {
    const o = {a: 2}
    const u = uniqueArrayBy([o, o], obj => obj.a)
    assert.strictEqual(u.length, 1)
    assert.strictEqual(u[0].a, 2)
  })

  it('should compare objects strictly', function () {
    const u = uniqueArrayBy([[{}], [{}]], 0)
    assert.strictEqual(u.length, 2)
  })

  it('should support a limit argument', function () {
    const u = uniqueArrayBy([[1], [1], [2], [3]], 0, {limit: 2})
    assert.strictEqual(u.length, 2)
    assert.strictEqual(u[0][0], 1)
    assert.strictEqual(u[1][0], 2)
  })
})
