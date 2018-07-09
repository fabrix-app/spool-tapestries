export class TapestryControllerNotInstalledError extends RangeError {
  constructor() {
    super(`
      The orm spool installed does not contain a TapestryController.
      Please check the orm and that it supports Tapestries.
      `)
  }

  get name () {
    return 'TapestryControllerNotInstalledError'
  }
}

