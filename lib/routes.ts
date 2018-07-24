export const Routes = {
  '/{model}': {
    config: {
      prefix: 'tapestries.prefix'
    },
    'POST': 'TapestryController.create'
  },
  '/{model}/{id?}': {
    config: {
      prefix: 'tapestries.prefix'
    },
    'GET': 'TapestryController.find',
    'PUT': 'TapestryController.update',
    'PATCH': 'TapestryController.update',
    'DELETE': 'TapestryController.destroy'
  },
  '/{parentModel}/{parentId}/{childAttribute}': {
    config: {
      prefix: 'tapestries.prefix'
    },
    'POST': 'TapestryController.createAssociation'
  },
  '/{parentModel}/{parentId}/{childAttribute}/{childId?}': {
    config: {
      prefix: 'tapestries.prefix'
    },
    'GET': 'TapestryController.findAssociation',
    'PUT': 'TapestryController.updateAssociation',
    'DELETE': 'TapestryController.destroyAssociation'
  }
}


