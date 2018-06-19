import { Spool } from '@fabrix/fabrix/dist/common'
import { union } from 'lodash'

import { Util } from './util'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api from './api/index'

export class TapestriesSpool extends Spool {
  public modelTapestries = true

  constructor (app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })
    console.log('CONFIG', config)
  }

  /**
   * In order to activate tapestries, a TapestryController and
   * TapestryService must be provided by other spools. Ensure that
   * these are available and appear valid.
   */
  validate () {
    this.modelTapestries = true

    if (!this.app.api.services.TapestryService) {
      this.log.warn('spool-tapestries is installed, but TapestryService is not provided')
      this.modelTapestries = false
    }
    if (!this.app.api.controllers.TapestryController) {
      this.log.warn('spool-tapestries is installed, but TapestryController is not provided')
      this.modelTapestries = false
    }
  }

  /**
   * Compile routes for controller handlers, and filter model actions based
   * on the tapestries config.
   *
   * 1. ETL controller handlers into the standard (hapijs-based) route format.
   *    For example, the controller handler ExampleController.exampleHandler will
   *    generate a hapijs route object of the following form:
   *    {
   *      method: '*',
   *      path: '/example/exampleHandler',
   *      handler: 'ExampleController.exampleHandler'
   *    }
   *
   * 2. Create CRUD Route definition which maps to api.controllers.TapestryController
   *
   *    Operation | Method | Path                       | Tapestry Handler
   *    ----------+--------+----------------------------+-------------------
   *    Create    | POST   | /model                     | TapestryController.create
   *    Create    | POST   | /model/{id}/{child}        | TapestryController.createAssociation
   *    Read      | GET    | /model/{id?}               | TapestryController.find
   *    Read      | GET    | /model/{id}/{child}/{id?}  | TapestryController.findAssociation
   *    Update    | PUT    | /model/{id?}               | TapestryController.update
   *    Update    | PUT    | /model/{id}/{child}/{id?}  | TapestryController.updateAssociation
   *    Delete    | DELETE | /model/{id?}               | TapestryController.destroy
   *    Delete    | DELETE | /model/{id}/{child}/{id?}  | TapestryController.destroyAssociation
   */
  configure () {
    const controllerTapestries = Util.getControllerTapestries(this.app)
    const modelTapestries = this.modelTapestries ? Util.getModelTapestries(this.app) : []
    const tapestryRoutes = union(controllerTapestries, modelTapestries)

    this.app.config.set('routes', [
      ...tapestryRoutes,
      ...this.app.config.get('routes')
    ])
  }
}

