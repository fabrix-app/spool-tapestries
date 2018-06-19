# spool-tapestries

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Tapestries Spool. This spool provides the tapestry interface, which
other spools such as [spool-sequelize](https://github.com/fabrix-app/spool-sequelize) implement,
as well as a suite of tests that Tapestry implementations should pass.

![Fabrix Tapestries Diagram][diagram-image]

## What are Tapestries?

Tapestries automatically generate easy-to-use RESTful endpoints for your models.

## Install

```sh
$ npm install --save spool-tapestries
```

## Configure

```js
// config/main.js
module.exports = {
  packs: [
    // ... other spools
    require('spool-tapestries')
  ]
}
```

```js
// config/tapestries.js
module.exports = {
  /**
   * Generate routes for controller handlers.
   * You can set controllers to true/false to enable/disable 
   * automatic tapestries routes globaly
   */
  controllers: {
               
     /**
      * Default methods to accept for routes generated from controller handlers.
      */
     method: '*',
  
     /**
      * List of controllers to ignore; that is, do not generate tapestry routes
      * for them.
      */
     ignore: [ ]
   },

  /**
   * Generate conventional Create, Read, Update, and Delete (CRUD) routes for
   * each Model.
   */
  models: {
    options: {

      /**
       * The max number of objects to return by default. Can be overridden in
       * the request using the ?limit argument.
       */
      defaultLimit: 100,

      /**
       * Subscribe to changes on requested models via WebSocket
       * (support provided by spool-websocket)
       */
      watch: false,

      /**
       * Whether to populate all model associations by default (for "find")
       */
      populate: true
    },

    actions: {
      create: true,
      find: true,
      update: true,
      destroy: true,

      /**
       * Specify which "association" endpoints to activate.
       */
      createAssociation: true,
      findAssociation: true,
      updateAssociation: true,
      destroyAssociation: true
    }
  },

  /**
   * Prefix your tapestry route paths
   */
  prefix: '/api/v1'
}
```

## API

### `api.services.TapestryService`

The purpose of `TapestryService` is to transform and forward queries to the datastore.

#### `create (modelName, values, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to create (in `api.models`) | `User` |
| `values` | Yes | An object containing the values of the record to create | `{ username: 'admin' }` |
| `options` | No | Datastore-specific options |

#### `find (modelName, criteria, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to search for (in `api.models`) | `User` |
| `criteria` | Yes | An object containing the query criteria | `{ username: 'admin' }` |
| `options` | No | Datastore-specific options |

#### `update (modelName, criteria, values, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to create (in `api.models`) | `User` |
| `criteria` | Yes | An object containing the query criteria | `{ username: 'admin' }` |
| `values` | Yes | An object containing the values to update | `{ username: 'tjwebb' }` |
| `options` | No | Datastore-specific options |

#### `destroy (modelName, criteria, options)`

| param | required? | description | example |
|:---|:---|:---|:---|
| `modelName` | Yes | The name of the model to create (in `api.models`) | `User` |
| `criteria` | Yes | An object containing the query criteria | `{ username: 'admin' }` |
| `values` | Yes | An object containing the values to update | `{ username: 'tjwebb' }` |
| `options` | No | Datastore-specific options |

#### `createAssociation (parentModelName, parentId, childAttributeName, values, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `parentModelName` | Yes | The name of the parent model | `User`
| `parentId` | Yes | The id of the parent model | `1`
| `childAttributeName` | Yes | The name of the attribute to create and associate with the parent | `roles`
| `values` | Yes | An object containing the values to create | `{ name: 'adminRole' }`
| `options` | No | Datastore-specific options |

#### `findAssociation (parentModelName, parentId, childAttributeName, criteria, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `parentModelName` | Yes | The name of the parent model | `User`
| `parentId` | Yes | The id of the parent model | `1`
| `childAttributeName` | Yes | The name of the attribute to create and associate with the parent | `roles`
| `criteria` | Yes | An object containing the criteria to search on, or an id | `{ name: 'adminRole' }`
| `options` | No | Datastore-specific options |

#### `updateAssociation (parentModelName, parentId, childAttributeName, criteria, values, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `parentModelName` | Yes | The name of the parent model | `User`
| `parentId` | Yes | The id of the parent model | `1`
| `childAttributeName` | Yes | The name of the attribute to create and associate with the parent | `roles`
| `criteria` | Yes | An object containing the criteria to search on, or an id | `{ name: 'adminRole' }`
| `values` | Yes | An object containing the values to update | `{ name: 'adminRole' }`
| `options` | No | Datastore-specific options |

#### `destroyAssociation (parentModelName, parentId, childAttributeName, criteria, [options])`

| param | required? | description | example |
|:---|:---|:---|:---|
| `parentModelName` | Yes | The name of the parent model | `User`
| `parentId` | Yes | The id of the parent model | `1`
| `childAttributeName` | Yes | The name of the attribute to destroy and dissociate from the parent | `roles`
| `criteria` | Yes | An object containing the criteria to search on, or an id | `{ name: 'adminRole' }`
| `options` | No | Datastore-specific options |

### `api.controllers.TapestryController`

The purpose of the `TapestryController` is to transform and forward requests to the `TapestryService`.


[diagram-image]: http://i.imgur.com/olRxPS8.png
[npm-image]: https://img.shields.io/npm/v/spool-tapestries.svg?style=flat-square
[npm-url]: https://npmjs.org/package/spool-tapestries
[ci-image]: https://img.shields.io/travis/fabrix-app/spool-tapestries/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/fabrix-app/spool-tapestries
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-tapestries.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-tapestries
[codeclimate-image]: https://img.shields.io/codeclimate/github/fabrix-app/spool-tapestries.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fabrix-app/spool-tapestries
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix

