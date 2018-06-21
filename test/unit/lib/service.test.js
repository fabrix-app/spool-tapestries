'use strict'

//const _ = require('lodash')
const assert = require('assert')
const lib = require('../../../dist')
const Fabrix = require('@fabrix/fabrix').FabrixApp

describe('lib.api.services.TapestryService', () => {
  let testConfig, app
  beforeEach(() => {
    testConfig = {
      pkg: {},
      api: {},
      config: {
        main: {
          spools: [
            require('../../../dist').TapestriesSpool
          ]
        }
      }
    }
    app = new Fabrix(testConfig)
  })

  describe('#find', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.find('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#create', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.create('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#update', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.update('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#destroy', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.destroy('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#findAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.findAssociation('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#createAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.createAssociation('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#updateAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.updateAssociation('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
  describe('#destroyAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        app.services.TapestryService.destroyAssociation('model','criteria', {})
          .catch(err => {
            assert.throws(() => err, Error)
          })
      })
    })
  })
})
