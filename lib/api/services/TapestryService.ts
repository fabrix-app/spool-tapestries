import { FabrixService, FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { TapestryServiceNotInstalledError } from '../../errors'

export class TapestryService extends FabrixService {
  find (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  create (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  update (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  destroy (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  findAssociation (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  createAssociation (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  updateAssociation (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  destroyAssociation (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }
}
