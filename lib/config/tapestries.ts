export const tapestries = {

  prefix: '',

  controllers: false,

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

