
const lorem = require('../lib/lorem.js')
const { test } = require('tape-modern')

test('lorem', t => {
  t.ok(lorem(1).length === 1, '1 bytes')
  t.ok(lorem(2).length === 2, '2 bytes')
  t.ok(lorem(3).length === 3, '3 bytes')
  t.ok(lorem(1000).length === 1000, '1000 bytes')
  t.ok(lorem(10000).length === 10000, '10000 bytes')
})