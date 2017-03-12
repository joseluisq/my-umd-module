/**
 * Markup for testing
 * ------------------
 * If your module need markup import this file in your `test.js`.
 */

import { jsdom } from 'jsdom'

module.exports.init = () => {
  global.document = jsdom('<!doctype html><html><body></body></html>')
  global.window = document.defaultView

  // Define here your markup template
  const tmpl = `
    <div id="my-umd-module"></div>
  `

  document.body.innerHTML = tmpl
}
