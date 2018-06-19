const _ = require('lodash')
const assert = require('assert')

describe('Router Spool', () => {

  describe('#configure', () => {
    it('should have a prefix', () => {
      console.log(global.app.config.entries())
      assert.equal(global.app.config.get('tapestries.prefix'), '/api/v1')
    })
  })
  describe('#initialize', () => {
    it('should include tapestry routes (Controllers) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 4)
      assert(_.find(routes, {path: global.app.config.get('tapestries.prefix') + '/test/testHandler'}))
    })
    it('should include tapestry routes (Models) in app.routes', () => {
      const routes = global.app.routes

      assert.equal(routes.length, 4)
      assert(_.find(routes, {path: global.app.config.get('tapestries.prefix') + '/{model}', method: 'POST'}))
    })
    it('should bind route handler to controller method', () => {
      const routes = global.app.routes

      assert(_.isFunction(routes[0].handler))
    })
    it('should attach prerequisite methods', () => {
      const routes = global.app.routes
      const configRoute = routes.find(r => {
        console.log('checking', r)
        return (
          // TODO should this route actually have the prefix attached?
          // r.path === global.app.config.get('tapestries.prefix') + '/test/testHandler' &&
          r.path === '/test/testHandler' &&
          r.method === 'GET'
        )
      })

      console.log('configRoute', configRoute)
      console.log('app.routes', global.app.routes)

      assert(_.isFunction(configRoute.config.pre[0]))
    })
  })
})
