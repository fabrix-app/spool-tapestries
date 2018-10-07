/* eslint new-cap: [0] */
const assert = require('assert')
const lib = require('../../../dist/index')

describe('lib.Errors', () => {
  describe('TapestryServiceNotInstalledError', () => {
    it('#name', () => {
      const err = new lib.Errors.TapestryServiceNotInstalledError()
      assert.equal(err.name, 'TapestryServiceNotInstalledError')
    })
  })
  describe('TapestryControllerNotInstalledError', () => {
    it('#name', () => {
      const err = new lib.Errors.TapestryControllerNotInstalledError()
      assert.equal(err.name, 'TapestryControllerNotInstalledError')
    })
  })
})
