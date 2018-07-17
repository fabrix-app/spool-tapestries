export const Routes = {
  '/{model}': {
    'POST': 'TapestryController.create'
  },
  '/{model}/{id?}': {
    'GET': 'TapestryController.find',
    'PUT': 'TapestryController.update',
    'PATCH': 'TapestryController.update',
    'DELETE': 'TapestryController.destroy'
  },
  '/{parentModel}/{parentId}/{childAttribute}': {
    'POST': 'TapestryController.createAssociation'
  },
  '/{parentModel}/{parentId}/{childAttribute}/{childId?}': {
    'GET': 'TapestryController.findAssociation',
    'PUT': 'TapestryController.updateAssociation',
    'DELETE': 'TapestryController.destroyAssociation'
  }
}


