import { FabrixApp } from '@fabrix/fabrix'
import { join } from 'path'
import { map, flatten, omit } from 'lodash'
import { Routes } from './routes'
import { Utils as RouterUtils } from '@fabrix/spool-router'

export const Utils = {
  /**
   * Get the controller method(s)
   */
  getControllerMethods(app: FabrixApp): string[] {
    let configMethod = app.config.get('tapestries.controllers.method') || ['GET', 'POST']
    if (configMethod instanceof Object) {
      configMethod = Object.values(configMethod)
    }
    return typeof configMethod === 'string' ? [configMethod] : configMethod
  },

  /**
   * Get the Controllers to be Ignored by Tapestries
   */
  getControllerIgnore(app: FabrixApp): string[] {
    return Object.values(app.config.get('tapestries.controllers.ignore') || [])
  },

  /**
   * Get either the configured spool-tapestries prefix, or use the one set by spool-router if any.
   */
  getPrefix(app: FabrixApp) {
    let prefix = app.config.get('tapestries.prefix')
    if (!prefix) {
      prefix = app.config.get('router.prefix') || ''
    }
    return prefix.toString()
  },
  /**
   * Compile controller handlers into route objects
   */
  getControllerTapestries (app: FabrixApp): {[key: string]: any} {
    if (app.config.get('tapestries.controllers') === false) {
      return {}
    }

    // Returns an object of available Controllers for Tapestries
    const controllers = omit(
      app.controllers || {},
      Utils.getControllerIgnore(app)
    )

    const prefix = Utils.getPrefix(app)
    const routes = {}
    Object.keys(controllers).forEach((controllerName: string) => {
      controllers[controllerName].methods.forEach(handlerName => {
        const route = {}
        const path = Utils.getHandlerPath(app, prefix, controllers[controllerName].id, handlerName)

        Utils.getControllerMethods(app).forEach(method => {
          route[method] = Utils.getControllerHandler(controllerName, handlerName)
        })

        routes[path] = route
      })
    })
    return routes
  },

  /**
   * Select the model tapestry routes that the configuration allows.
   */
  getModelTapestries (app: FabrixApp): {[key: string]: any} {
    const actionsConfig = app.config.get('tapestries.models.actions') || {}
    const prefix = Utils.getPrefix(app)
    const routes = {}
    Object.keys(Routes).forEach(path => {
      Object.keys(Routes[path]).map(m => {
        if (RouterUtils.methods.indexOf(m) > -1) {
          if (actionsConfig[Utils.getHandlerName(Routes[path][m])] === false) {
            delete Routes[path][m]
          }
        }
      })
      routes[`${prefix}${path}`] = Routes[path]
    })
    return routes
  },

  /**
   * Get the controller name plus the method name as a string
   */
  getControllerHandler (controllerName: string, handlerName: string): string {
    return `${controllerName}.${handlerName}`
  },

  /**
   * get a Controller.Method name as just the method
   */
  getHandlerName (routeHandler: string = ''): string {
    return (routeHandler.split('.')[1] || '').toString()
  },

  /**
   * Join a list as a path
   */
  getHandlerPath (app: FabrixApp, prefix: string, controllerId: string, handlerName: string): string {
    return join('/', prefix, controllerId, handlerName)
  }
}
