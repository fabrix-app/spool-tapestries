'use strict'

const _ = require('lodash')
const assert = require('assert')
const lib = require('../../dist')

describe('lib.Util', () => {
  describe('#getHandlerPath', () => {
    it('should return correct url path for controller handler', () => {
      assert.equal(
        lib.Util.getHandlerPath(global.app, '/prefix', 'test', 'test'),
        '/prefix/test/test'
      )
    })
  })

  describe('#getControllerTapestries', () => {

    it('should return controller tapestry routes', () => {
      const tapestries = lib.Util.getControllerTapestries(global.app)
      assert.equal(tapestries.length, 1)
      assert(_.find(tapestries, {handler: 'TestController.testHandler'}))
      assert(_.find(tapestries, {path: global.app.config.get('tapestries.prefix') + '/test/testHandler'}))
    })

    it('should return an empty array if controller tapestry routes are disabled', () => {
      const tapestryConfig = global.app
      tapestryConfig.controllers = false
      const tapestries = lib.Util.getControllerTapestries(tapestryConfig)

      assert.equal(tapestries.length, 0)
    })

  })
})

