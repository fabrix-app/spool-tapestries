const _ = require('lodash')
const assert = require('assert')

describe('Router Spool', () => {

  describe('#configure', () => {
    it('should have a prefix', () => {
      console.log(global.app.routes)
      // console.log(global.app.config.entries())
      assert.equal(global.app.config.get('tapestries.prefix'), '/api/v1')
    })
  })
  describe('#initialize', () => {
    it('should include tapestry routes (Controllers) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(Object.keys(routes).length, 5)
      assert(routes[global.app.config.get('tapestries.prefix') + '/test/testHandler'])
    })
    it('should include tapestry routes (Models) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(Object.keys(routes).length, 5)
      assert(routes[global.app.config.get('tapestries.prefix') + '/{model}'])
    })
    it('should bind route handler to controller method', () => {
      const routes = global.app.routes
      assert(_.isFunction(routes[global.app.config.get('tapestries.prefix') + '/{model}/{id?}'].GET))
      assert(_.isFunction(routes[global.app.config.get('tapestries.prefix') + '/{model}/{id?}'].PUT))
      assert(_.isFunction(routes[global.app.config.get('tapestries.prefix') + '/{model}/{id?}'].PATCH))
    })
    it('should attach prerequisite methods', () => {
      const configRoute = global.app.routes[global.app.config.get('tapestries.prefix') + '/test/testHandler']
      assert(_.isFunction(configRoute.config.pre[0]))
    })
  })
})
