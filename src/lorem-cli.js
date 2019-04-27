#!/usr/bin/env node

const lorem = require('./lorem')
const bytes = require('bytes')

let n = bytes.parse(process.argv[2] || '0.5kb')
let chunk = bytes.parse('50kb')

// Write in chunks if request is large
while (n > chunk) {
  process.stdout.write(lorem(chunk))
  n -= chunk
}

// Write text or last chunk
process.stdout.write(lorem(n))