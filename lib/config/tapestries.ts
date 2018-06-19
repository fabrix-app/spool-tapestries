export const tapestries = {

  prefix: '',

  controllers: {
    method: '*',
    ignore: [
      'TapestryController'
    ]
  },

  models: {
    options: {
      defaultLimit: 100,
      populate: true
    },

    actions: {
      create: true,
      find: true,
      update: true,
      destroy: true,

      createAssociation: true,
      findAssociation: true,
      updateAssociation: true,
      destroyAssociation: true
    }
  }
}

