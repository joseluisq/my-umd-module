/**
 * Testing
 * --------
 * Define here your testing stuff.
 */

import Test from 'tape'
import Markup from './markup'
import Module from './'

Markup.init()

Test('My UMD Module Test Suite', t => {
  t.plan(1)

  const text = 'My Test!'
  const container = document.getElementById('my-umd-module')

  Module({
    container,
    text
  })

  t.ok(text, container.innerText, 'ok!')
})
