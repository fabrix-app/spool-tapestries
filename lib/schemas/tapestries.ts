import joi from 'joi'

export const tapestries = joi.object().keys({
  prefix: joi.string().allow('', null),
  controllers: joi.any(),
  models: joi.any()
})
