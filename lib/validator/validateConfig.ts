import * as joi from 'joi'
import { tapestries } from '../schemas/tapestries'

export const validateConfig = {
  validateConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, tapestries, (err, value) => {
        if (err) {
          return reject(new TypeError('config.tapestries: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
