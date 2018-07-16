import { FabrixApp } from '@fabrix/fabrix'
import { join } from 'path'
import { map, flatten, omit } from 'lodash'
import { Routes } from './routes'

export const Util = {
  /**
   * Get the controller method(s)
   */
  getControllerMethods(app: FabrixApp) {
    let configMethod = app.config.get('tapestries.controllers.method') || ['GET', 'POST']
    if (configMethod instanceof Object) {
      configMethod = Object.values(configMethod)
    }
    return configMethod
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
  getControllerTapestries (app: FabrixApp): {method: string, path: string, handler: string}[] {
    if (app.config.get('tapestries.controllers')) {
      // Returns an object of available Controllers for Tapestries
      const controllers = omit(
        app.controllers || {},
        Util.getControllerIgnore(app)
      )

      const prefix = Util.getPrefix(app)

      return flatten(map(controllers, (controller, controllerName: string) => {
        return map(controller.methods, handlerName => {
          return {
            method: Util.getControllerMethods(app),
            path: Util.getHandlerPath(app, prefix, controller.id, handlerName),
            handler: Util.getControllerHandler(controllerName, handlerName)
          }
        })
      }))
    }
    else {
      return []
    }
  },

  /**
   * Select the model tapestry routes that the configuration allows.
   */
  getModelTapestries (app: FabrixApp): any[] {
    const actionsConfig = app.config.get('tapestries.models.actions') || {}
    const prefix = Util.getPrefix(app)

    return Routes
      .filter(route => {
        const handlerName = Util.getHandlerName(route.handler)
        return actionsConfig[handlerName]
      })
      .map(route => {
        return Object.assign(route, { path: `${prefix}${route.path}` })
      })
  },

  getControllerHandler (controllerName: string, handlerName: string): string {
    return `${controllerName}.${handlerName}`
  },

  getHandlerName (routeHandler: string = ''): string {
    return (routeHandler.split('.')[1] || '').toString()
  },

  getHandlerPath (app: FabrixApp, prefix: string, controllerId: string, handlerName: string): string {
    return join('/', prefix, controllerId, handlerName)
  }
}
