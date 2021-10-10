import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { min, max } from 'd3-array'
import { getScale } from '../src/lib/utils.js'

test('should generate a band scale', () => {
  const input = ['a', 'b', 'c']
  const scale = getScale(input, [0, 100])
  assert.equal(scale.domain(), input)
  assert.equal(scale.range(), [0, 100])
  assert.equal(scale.paddingInner(), 0.5)
  assert.equal(scale.paddingOuter(), 0.5)
  // console.log(scale.bandwidth(), scale.step(), scale.paddingInner())
})

test('should generate a linear scale', () => {
  const input = [1, 2, 3, 99]
  const scale = getScale(input, [0, 100])
  assert.equal(scale.domain(), [1, 99])
  assert.equal(scale.range(), [0, 100])

  // console.log(scale.ticks(5))
  // console.log(scale(0), scale(2))
  // console.log(scale.nice())
  // console.log(scale.invert())
})

test('should include 0', () => {
  let input = [99, 100, 120, 150]
  let minValue = min(input)
  let maxValue = max(input)

  assert.ok(minValue < maxValue)
  console.log('range', maxValue - minValue)
  console.log('range w 0', maxValue - 0)
  console.log('range w 0', (maxValue - minValue) / maxValue)
})
test.run()
