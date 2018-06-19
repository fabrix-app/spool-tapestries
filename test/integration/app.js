const smokesignals = require('smokesignals')
require('@fabrix/fabrix')


module.exports = {
  pkg: {
    name: 'tapestries-spool-test'
  },
  api: {
    services: {
      TapestryService: class TapestryService extends Service {

      }
    },
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
      prefix: '/api/v1'
    },
    main: {
      spools: [
        require('../../dist').TapestriesSpool,
        require('@fabrix/spool-router').RouterSpool
      ]
    },
    log: {
      logger: new smokesignals.Logger('debug')
    },
    routes: [
      {
        method: 'GET',
        path: '/test/testHandler',
        handler: 'TestController.testHandler',
        config: {
          pre: [
            'TestPolicy.test'
          ]
        }
      }
    ]
  }
}

