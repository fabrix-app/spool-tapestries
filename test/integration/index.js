'use strict'

const FabrixApp = require('@fabrix/fabrix').FabrixApp

before(() => {
  global.app = new FabrixApp(require('./app'))
  return global.app.start().catch(err => global.app.stop(err))
})

after(() => {
  return global.app.stop()
})
