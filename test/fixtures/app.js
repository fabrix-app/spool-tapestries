'use strict'

const smokesignals = require('smokesignals')
const Policy = require('@fabrix/fabrix/dist/common/Policy').FabrixPolicy
const Controller = require('@fabrix/fabrix/dist/common/Controller').FabrixController
const Model = require('@fabrix/fabrix/dist/common/Model').FabrixModel



module.exports = {
  pkg: {
    name: 'tapestries-spool-test'
  },
  api: {
    policies: {
      TestPolicy: class TestPolicy extends Policy {
        test() {
        }
      }
    },
    controllers: {
      TestController: class TestController extends Controller {
        testHandler() {
        }
      },
      TapestryController: class TapestryController extends Controller {
        find() {

        }

        create() {

        }

        update() {
        }
      }
    },
    models: {
      User: class User extends Model {
        static config() {
          return {}
        }

        static schema() {
          return {
            name: 'string',
            roles: {
              collection: 'Role',
              via: 'user'
            }
          }
        }
      },
      Role: class Role extends Model {
        static config() {
          return {
            store: 'storeoverride'
          }
        }

        static schema() {
          return {
            name: 'string',
            user: {
              model: 'User'
            }
          }
        }
      }
    }
  },
  config: {
    tapestries: {
      prefix: '/api/v1',
      controllers: {
        method: '*',
        ignore: []
      }
    },
    main: {
      spools: [
        require('@fabrix/spool-router').RouterSpool,
        require('../../dist/index').TapestriesSpool
      ]
    },
    log: {
      logger: new smokesignals.Logger('debug')
    },
    routes: {
      '/test/testHandler': {
        'GET': 'TestController.testHandler',
        config: {
          prefix: 'tapestries.prefix',
          pre: [
            'TestPolicy.test'
          ]
        }
      }
    }
  }
}

