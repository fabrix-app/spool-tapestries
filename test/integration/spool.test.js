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

      assert.equal(routes.size, 5)
      assert(routes.get(global.app.config.get('tapestries.prefix') + '/test/testHandler'))
    })
    it('should include tapestry routes (Models) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.size, 5)
      assert(routes.get(global.app.config.get('tapestries.prefix') + '/{model}'))
    })
    it('should bind route handler to controller method', () => {
      const routes = global.app.routes
      assert(_.isFunction(routes.get(global.app.config.get('tapestries.prefix') + '/{model}/{id?}').GET.handler))
      assert(_.isFunction(routes.get(global.app.config.get('tapestries.prefix') + '/{model}/{id?}').PUT.handler))
      assert(_.isFunction(routes.get(global.app.config.get('tapestries.prefix') + '/{model}/{id?}').PATCH.handler))
    })
    it('should attach prerequisite methods', () => {
      const configRoute = global.app.routes.get(global.app.config.get('tapestries.prefix') + '/test/testHandler')
      assert(_.isFunction(configRoute.GET.config.pre[0]))
    })
  })
})
