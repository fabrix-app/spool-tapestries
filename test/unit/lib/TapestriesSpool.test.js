const FabrixApp = require('@fabrix/fabrix').FabrixApp
const TapestriesSpool = require('../../../dist').TapestriesSpool

describe('TapestriesSpool', () => {
  let app
  beforeEach(() => {
    app =  new FabrixApp({pkg:{}, config: {}, api: { services: {}, controllers: {}}})
  })

  describe('#validate', () => {
    it('should validate', (done) => {
      const spool = new TapestriesSpool(app, {})
      spool.validate().then(() => {
        done()
      })
        .catch(err => done(err))
    })
  })
  describe('#configure', () => {
    it('should configure', () => {
      app.config.immutable = false
      const spool = new TapestriesSpool(app, {})
      spool.configure()
    })
  })
})
