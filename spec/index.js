import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { add } from '../src/index.js'

test('should add two numbers', () => {
  assert.equal(add(1, 2), 3)
})

test.run()
