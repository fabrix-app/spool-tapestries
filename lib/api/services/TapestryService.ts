import { FabrixService, FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { TapestryServiceNotInstalledError } from '../../errors'

export class TapestryService extends FabrixService {
  find (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  create (model, body, options) {
    throw new TapestryServiceNotInstalledError()
  }

  update (model, criteria, body, options) {
    throw new TapestryServiceNotInstalledError()
  }

  destroy (model, criteria, options) {
    throw new TapestryServiceNotInstalledError()
  }

  findAssociation (parentModel, parentId, childAttribute, childId, options) {
    throw new TapestryServiceNotInstalledError()
  }

  createAssociation (parentModel, parentId, childAttribute, body, options) {
    throw new TapestryServiceNotInstalledError()
  }

  updateAssociation (parentModel, parentId, childAttribute, childId, body, options) {
    throw new TapestryServiceNotInstalledError()
  }

  destroyAssociation (parentModel, parentId, childAttribute, childId, options) {
    throw new TapestryServiceNotInstalledError()
  }
}
