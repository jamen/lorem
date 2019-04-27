
const benchmark = require('@jamen/bench')
const lorem = require('../lib/lorem.js')

const bench = benchmark()

bench.add('100 bytes', () => {
  lorem(100)
})

bench.add('10000 bytes', () => {
  lorem(10000)
})

bench.run()