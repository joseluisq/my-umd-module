/**
 * Module
 * -------
 *  Define here your module stuff. Feel free to modify it!
 */

import Emitus from 'emitus'

module.exports = (options = {}) => {
  // Options
  const opts = Object.assign({
    container: document.body,
    text: ''
  }, options)

  // Module
  const Module = Emitus({
    init () {
      opts.container.innerText = opts.text
    }
  })

  Module.init()

  return Module
}
