export class TapestryServiceNotInstalledError extends RangeError {
  constructor() {
    super(`
      The orm spool installed does not contain a TapestryService.
      Please check the orm and that it supports Tapestries.
      `)
  }

  get name () {
    return 'TapestryServiceNotInstalledError'
  }
}

