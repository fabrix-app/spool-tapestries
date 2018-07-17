'use strict'

const _ = require('lodash')
const assert = require('assert')
const lib = require('../../dist')
const FabrixApp = require('@fabrix/fabrix').FabrixApp

describe('lib.Util', () => {
  describe('#getHandlerPath', () => {
    it('should return correct url path for controller handler', () => {
      assert.equal(
        lib.Utils.getHandlerPath(global.app, '/prefix', 'test', 'test'),
        '/prefix/test/test'
      )
    })
  })

  describe('#getControllerTapestries', () => {

    it('should return controller tapestry routes', () => {
      const tapestries = lib.Utils.getControllerTapestries(global.app)
      assert.equal(Object.keys(tapestries).length, 1)
      // assert(_.find(tapestries, {handler: 'TestController.testHandler'}))
      assert(tapestries[global.app.config.get('tapestries.prefix') + '/test/testHandler'])
    })

    it('should return an empty array if controller tapestry routes are disabled', () => {
      const tapestryConfig = global.app
      tapestryConfig.controllers = false
      const tapestries = lib.Utils.getControllerTapestries(tapestryConfig)

      assert.equal(Object.keys(tapestries).length, 0)
    })

    it('should return an empty array', () => {
      const app = new FabrixApp({pkg: {}, api: {}, config: {}})
      const tapestries = lib.Utils.getControllerTapestries(app)
      assert.equal(Object.keys(tapestries).length, 0)
    })
  })
})

