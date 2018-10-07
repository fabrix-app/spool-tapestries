'use strict'

//const _ = require('lodash')
const assert = require('assert')
const lib = require('../../../dist/validator/validateConfig')

describe('lib.ValidateConfig', () => {
  describe('#validateConfig', () => {
    it('should validate a bad tapestries config', (done) => {
      lib.validateConfig.validateConfig('break')
        .then(broke => {
          done(broke)
        })
        .catch(err => {
          done()
        })
    })
  })
})
