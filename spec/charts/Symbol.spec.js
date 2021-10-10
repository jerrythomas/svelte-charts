import { test } from 'uvu'
import * as assert from 'uvu/assert'
import facade from 'svelte-facade'

// import Symbol from '../../src/chart/Symbol.svelte'
import { Symbol } from '../../src'
test.before(facade.setup)
test.before.each(facade.reset)

test('should render a circle by default', () => {
  const { container } = facade.render(Symbol)
  // event binding is svelte feature, it should work...
  // await facade.fire(container.querySelector('path'), 'click')
  assert.snapshot(
    container.innerHTML,
    `<path d="M0 5A5 5 0 0 0 10 5A5 5 0 0 0 0 5" fill="none" stroke="currentColor" transform="translate(-5,-5)" stroke-width="0.5" fill-rule="evenodd"></path>`
  )
})

test('should accept custom properties', () => {
  const { container } = facade.render(Symbol, {
    x: 10,
    y: 10,
    size: 20,
    fill: 'red',
    stroke: 'red',
    thickness: 5,
  })

  assert.snapshot(
    container.innerHTML,
    `<path d="M0 10A10 10 0 0 0 20 10A10 10 0 0 0 0 10" fill="red" stroke="red" transform="translate(0,0)" stroke-width="5" fill-rule="evenodd"></path>`
  )
})

test.run()
