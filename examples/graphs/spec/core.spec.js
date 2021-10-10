import { test } from 'uvu'
import * as assert from 'uvu/assert'
import * as ENV from '@jerrythomas/svelte-esm-utils/env'

import Menu from '../src/lib/Menu.svelte'
test.before(ENV.setup)
test.before.each(ENV.reset)

test('should render empty menu by default', () => {
  const { container } = ENV.render(Menu)
  // event binding is svelte feature, it should work...
  // await ENV.fire(container.querySelector('path'), 'click')
  assert.snapshot(
    container.innerHTML,
    `<path d="M0 5A5 5 0 0 0 10 5A5 5 0 0 0 0 5" fill="none" stroke="currentColor" transform="translate(-5,-5)" stroke-width="0.5" fill-rule="evenodd"></path>`
  )
})

test.run()
