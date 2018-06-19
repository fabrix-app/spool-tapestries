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
        assert.throws(() => app.services.TapestryService.find('model','criteria', {}), Error)
      })
    })
  })
  describe('#create', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.create('model','criteria', {}), Error)
      })
    })
  })
  describe('#update', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.update('model','criteria', {}), Error)
      })
    })
  })
  describe('#destroy', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.destroy('model','criteria', {}), Error)
      })
    })
  })
  describe('#findAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.findAssociation('model','criteria', {}), Error)
      })
    })
  })
  describe('#createAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.createAssociation('model','criteria', {}), Error)
      })
    })
  })
  describe('#updateAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.updateAssociation('model','criteria', {}), Error)
      })
    })
  })
  describe('#destroyAssociation', () => {
    describe('#message', () => {
      it('should specify the failed spool and stage', () => {
        assert.throws(() => app.services.TapestryService.destroyAssociation('model','criteria', {}), Error)
      })
    })
  })
})
