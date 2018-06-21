import { FabrixService, FabrixService as Service } from '@fabrix/fabrix/dist/common'
import { TapestryServiceNotInstalledError } from '../../errors'

export class TapestryService extends FabrixService {
  find (model, criteria, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  create (model, body, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  update (model, criteria, body, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  destroy (model, criteria, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  findAssociation (parentModel, parentId, childAttribute, childId, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  createAssociation (parentModel, parentId, childAttribute, body, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  updateAssociation (parentModel, parentId, childAttribute, childId, body, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }

  destroyAssociation (parentModel, parentId, childAttribute, childId, options): Promise<any> {
    return Promise.reject(new TapestryServiceNotInstalledError())
  }
}
