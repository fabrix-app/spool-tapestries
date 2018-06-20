import { FabrixApp } from '@fabrix/fabrix'
import { join } from 'path'
import { get, map, flatten, omit } from 'lodash'
import { Routes } from './routes'

export const Util = {

  /**
   * Compile controller handlers into route objects
   */
  getControllerTapestries (app: FabrixApp): any[] {
    if (app.config.get('tapestries.controllers')) {
      const controllers = omit(
        app.controllers,
        app.config.get('tapestries.controllers.ignore') || []
      )
      const prefix = app.config.get('tapestries.prefix')

      return flatten(map(controllers, (controller, controllerName: string) => {

        return map(controller.methods, handlerName => {
          return {
            method: app.config.get('tapestries.controllers.method') || ['GET', 'POST'],
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
    const actionsConfig = app.config.get('tapestries.models.actions') || []
    const prefix = app.config.get('tapestries.prefix') || ''

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
    return (routeHandler).split('.')[1]
  },

  getHandlerPath (app: FabrixApp, prefix: string, controllerId: string, handlerName: string): string {
    return join('/', prefix, controllerId, handlerName)
  }
}
