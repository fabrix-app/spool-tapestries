export const Routes = [
  {
    method: 'POST',
    path: '/{model}',
    handler: 'TapestryController.create'
  },
  {
    method: 'GET',
    path: '/{model}/{id?}',
    handler: 'TapestryController.find'
  },
  {
    method: [ 'PUT', 'PATCH' ],
    path: '/{model}/{id?}',
    handler: 'TapestryController.update'
  },
  {
    method: 'DELETE',
    path: '/{model}/{id?}',
    handler: 'TapestryController.destroy'
  },
  {
    method: 'POST',
    path: '/{parentModel}/{parentId}/{childAttribute}',
    handler: 'TapestryController.createAssociation'
  },
  {
    method: 'GET',
    path: '/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: 'TapestryController.findAssociation'
  },
  {
    method: 'PUT',
    path: '/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: 'TapestryController.updateAssociation'
  },
  {
    method: 'DELETE',
    path: '/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: 'TapestryController.destroyAssociation'
  }
]

