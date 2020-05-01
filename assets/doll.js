'use strict';



;define("doll/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("doll/app", ["exports", "ember-resolver", "ember-load-initializers", "doll/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("doll/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("doll/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("doll/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("doll/helpers/app-version", ["exports", "doll/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("doll/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("doll/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("doll/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "doll/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("doll/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("doll/initializers/ember-cli-mirage", ["exports", "doll/config/environment", "doll/mirage/config", "ember-cli-mirage/get-rfc232-test-context", "ember-cli-mirage/start-mirage"], function (_exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.startMirage = startMirage;
  _exports.default = void 0;
  //
  // This initializer does two things:
  //
  // 1. Pulls the mirage config objects from the application's config and
  //    registers them in the container so `ember-cli-mirage/start-mirage` can
  //    find them (since it doesn't have access to the app's namespace).
  // 2. Provides legacy support for auto-starting mirage in pre-rfc268 acceptance
  //    tests.
  //
  var _default = {
    name: 'ember-cli-mirage',

    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, {
          instantiate: false
        });
      }

      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, {
          instantiate: false
        });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }

  };
  _exports.default = _default;

  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, {
      env,
      baseConfig: _config.default,
      testConfig: _config.testConfig
    });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }

    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }

    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';

    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }
  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */


  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';
    return usingInDev || usingInTest;
  }
});
;define("doll/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("doll/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("doll/initializers/export-application-global", ["exports", "doll/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("doll/instance-initializers/ember-cli-mirage-autostart", ["exports", "ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart"], function (_exports, _emberCliMirageAutostart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define("doll/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("doll/mirage/config", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default() {// These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
    */
  }

  (void 0).get('/dolls', function (schema) {
    let dolls = schema.posts.all();
    let json = this.serialize(dolls);
    return json;
  });
});
;define("doll/mirage/factories/post", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.Factory.extend({
    title: 'Blog Title',
    author: 'Anne Onymouse',
    content: "Ut excepteur quis ea elit exercitation et esse eu proident aute. Pariatur incididunt dolore cillum dolore officia deserunt ad culpa Lorem. Adipisicing veniam est ullamco ut labore in veniam dolore aliqua. Tempor veniam exercitation veniam esse adipisicing in consequat Lorem proident tempor nisi exercitation excepteur excepteur. Incididunt ex laborum adipisicing laboris ea. Nulla pariatur deserunt anim voluptate amet. Elit esse do excepteur ea eu officia qui minim cillum aliqua enim fugiat et. Ad occaecat nulla ex dolor sint. Do magna irure reprehenderit aute sunt eiusmod proident. Aliquip enim mollit et exercitation est officia. In est eiusmod minim voluptate ullamco sit ut labore nulla ipsum laboris aute sunt fugiat. Ex veniam eiusmod dolore cupidatat proident. Magna aliqua sint amet consectetur nisi cillum veniam ut esse qui reprehenderit deserunt. Consequat in aute veniam amet minim voluptate cillum eu velit incididunt eiusmod anim qui. Deserunt non aute aliquip consectetur eu magna aliquip ea fugiat qui minim adipisicing. Laboris eu occaecat est sit veniam. Ad fugiat cillum ad reprehenderit nostrud amet mollit est cupidatat quis velit dolor et enim. In dolor reprehenderit ad ullamco incididunt. In tempor reprehenderit amet sint anim eu eu id non occaecat incididunt occaecat. Fugiat magna commodo amet fugiat enim incididunt qui dolor nostrud officia excepteur. Occaecat ad minim adipisicing sint non esse anim do anim nostrud. Est proident sit voluptate tempor laborum reprehenderit. Incididunt voluptate aliqua eiusmod qui voluptate exercitation dolore aliqua anim sunt elit nisi. Amet mollit commodo cillum ut voluptate commodo aliquip nisi irure. Dolor aute pariatur reprehenderit eiusmod labore duis.",

    date() {
      let today = new Date();
      return today.toDateString();
    },

    category: 'Technology'
  });

  _exports.default = _default;
});
;define("doll/mirage/scenarios/default", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default()
  /* server */
  {
    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */
    server.createList('post', 9);
  }
});
;define("doll/mirage/serializers/application", ["exports", "ember-cli-mirage"], function (_exports, _emberCliMirage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberCliMirage.JSONAPISerializer.extend({});

  _exports.default = _default;
});
;define("doll/pods/application/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ApplicationRoute extends Ember.Route {}

  _exports.default = ApplicationRoute;
  ;
});
;define("doll/pods/application/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BT2NzlkV",
    "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[5,\"header\",[],[[],[]]],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/application/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/pods/components/header/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wLxqs2b1",
    "block": "{\"symbols\":[],\"statements\":[[5,\"link-to\",[[12,\"class\",\"w-full h-10 p-24 mb-6 text-white text-6xl font-bold flex justify-center items-center bg-purple-300\"]],[[\"@route\"],[\"dolls\"]],{\"statements\":[[0,\"\\nHello Doll!\\n\"]],\"parameters\":[]}],[0,\"\\n \"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/components/header/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/pods/dolls/doll/bio/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ore3jOs2",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,0,[\"model\",\"bio\"]],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/dolls/doll/bio/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/pods/dolls/doll/items/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "kvMISdbB",
    "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\",\"items\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,1,[\"doll\"]],false],[0,\" has a pet \"],[1,[23,1,[\"name\"]],false],[0,\"!\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/dolls/doll/items/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/pods/dolls/doll/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class DollsDollRoute extends Ember.Route {
    model(params) {
      let dolls = this.modelFor('dolls');
      return dolls.find(doll => doll.slug === params.slug);
    }

  }

  _exports.default = DollsDollRoute;
  ;
});
;define("doll/pods/dolls/doll/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9tq8gsbp",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"grid grid-cols-4 grid-rows-1 gap-4\"],[8],[0,\"\\n\\n  \"],[7,\"div\",true],[10,\"class\",\"row-end-2 col-start-1 col-span-4 border-double border-8 border-purple-300 m-6 rounded overflow-hidden shadow-lg\"],[8],[0,\"\\n\\n    \"],[7,\"div\",true],[10,\"class\",\" grid grid-cols-2 grid-rows-1 gap-4\"],[8],[0,\"\\n\"],[7,\"img\",true],[10,\"class\",\"col-span-1 mb-8\"],[11,\"src\",[23,0,[\"model\",\"propic\"]]],[10,\"alt\",\"doll picture\"],[8],[9],[0,\"\\n             \\n            \"],[7,\"div\",true],[10,\"class\",\"px-6 py-4 flex flex-col justify-between \"],[8],[0,\" \\n                \"],[5,\"link-to\",[[12,\"class\",\"font-bold text-white bg-purple-500 rounded text-3xl text-center mb-2\"]],[[\"@route\",\"@model\"],[\"dolls.doll.bio\",[23,0,[\"model\",\"slug\"]]]],{\"statements\":[[0,\"\\n                    I'm \"],[1,[23,0,[\"model\",\"name\"]],false],[0,\"!\\n                \"]],\"parameters\":[]}],[0,\"\\n                \"],[7,\"p\",true],[10,\"class\",\"text-gray-700 text-base\"],[8],[0,\"\\n                    \"],[1,[22,\"outlet\"],false],[0,\"\\n                \"],[9],[0,\"\\n            \"],[5,\"link-to\",[[12,\"class\",\"font-bold text-white bg-purple-500 rounded text-3xl text-center bg-purple-300 hover:bg-purple-700 text-white font-bold rounded\"]],[[\"@route\",\"@model\"],[\"dolls.doll.items\",[23,0,[\"model\",\"slug\"]]]],{\"statements\":[[0,\"\\n                    Items \\n                \"]],\"parameters\":[]}],[0,\" \\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/dolls/doll/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/pods/dolls/index/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Bml3g5W9",
    "block": "{\"symbols\":[\"doll\"],\"statements\":[[0,\"\\n\"],[5,\"link-to\",[[12,\"class\",\"bg-purple-300 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded\"]],[[\"@route\",\"@model\"],[\"dolls.doll.items\",[23,0,[\"model\",\"slug\"]]]],{\"statements\":[[0,\"\\n          all Items \\n\"]],\"parameters\":[]}],[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"grid gap-4 grid-cols-3 m-6\"],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[5,\"link-to\",[[12,\"class\",\"max-w-sm border-double border-8 border-purple-300 rounded overflow-hidden shadow-lg\"]],[[\"@route\",\"@model\"],[\"dolls.doll.bio\",[23,1,[\"slug\"]]]],{\"statements\":[[0,\"\\n            \"],[7,\"img\",true],[10,\"class\",\"w-full\"],[11,\"src\",[23,1,[\"propic\"]]],[10,\"alt\",\"doll picture\"],[8],[9],[0,\"\\n            \"],[7,\"div\",true],[10,\"class\",\"px-6 py-4\"],[8],[0,\" \\n                \"],[7,\"div\",true],[10,\"class\",\"font-bold text-3xl bg-purple-500 text-white rounded text-center mb-2\"],[8],[0,\"\\n                    I'm \"],[1,[23,1,[\"name\"]],false],[0,\"!\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/dolls/index/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/pods/dolls/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Doll = Ember.Object.extend({
    name: '',
    bio: '',
    propic: ''
  });
  const Item = Ember.Object.extend({
    Name: '',
    item: ''
  });

  class DollsRoute extends Ember.Route {
    model() {
      let bunny = Item.create({
        doll: 'Ella',
        name: 'bunny'
      });
      let kitty = Item.create({
        doll: 'Darby',
        name: 'kitty'
      });
      let guppy = Item.create({
        doll: 'Annie',
        name: 'guppy'
      });
      let geco = Item.create({
        doll: 'Emma',
        name: 'geco'
      });
      let puppy = Item.create({
        doll: 'Mia',
        name: 'puppy'
      });
      let birdie = Item.create({
        doll: 'Melody',
        name: 'birdie'
      });
      let ellaDoll = Doll.create({
        name: 'Ella',
        slug: 'ella',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll1.png',
        items: Ember.A([bunny])
      });
      let darbyDoll = Doll.create({
        name: 'Darby',
        slug: 'darby',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll6.png',
        items: Ember.A([kitty])
      });
      let annieDoll = Doll.create({
        name: 'Annie',
        slug: 'annie',
        bio: 'bio Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll3.png',
        items: Ember.A([guppy])
      });
      let emmaDoll = Doll.create({
        name: 'Emma',
        slug: 'emma',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll4.png',
        items: Ember.A([geco])
      });
      let miaDoll = Doll.create({
        name: 'Mia',
        slug: 'mia',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll5.png',
        items: Ember.A([puppy])
      });
      let melodyDoll = Doll.create({
        name: 'Melody',
        slug: 'melody',
        bio: 'Dolore dolore exercitation incididunt commodo. Consequat id eiusmod duis minim reprehenderit labore excepteur nisi minim eu sint occaecat. Lorem consectetur magna non laboris sit fugiat amet. Anim Lorem sint voluptate sint.',
        propic: '/images/doll2.png',
        items: Ember.A([birdie])
      });
      return Ember.A([ellaDoll, darbyDoll, annieDoll, emmaDoll, miaDoll, melodyDoll]);
    }

  }

  _exports.default = DollsRoute;
  ;
});
;define("doll/pods/items/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Item = Ember.Object.extend({
    doll: '',
    name: ''
  });

  class ItemsRoute extends Ember.Route {
    model() {
      let bunny = Item.create({
        doll: 'Ella',
        name: 'bunny'
      });
      let kitty = Item.create({
        doll: 'Darby',
        name: 'kitty'
      });
      let guppy = Item.create({
        doll: 'Annie',
        name: 'guppy'
      });
      let geco = Item.create({
        doll: 'Emma',
        name: 'geco'
      });
      let puppy = Item.create({
        doll: 'Mia',
        name: 'puppy'
      });
      let birdie = Item.create({
        doll: 'Melody',
        name: 'birdie'
      });
      return [bunny, kitty, guppy, geco, puppy, birdie];
    }

  }

  _exports.default = ItemsRoute;
  ;
});
;define("doll/pods/items/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RY6jrOQW",
    "block": "{\"symbols\":[\"item\"],\"statements\":[[7,\"ul\",true],[10,\"class\",\"list pl3\"],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\",true],[8],[1,[23,1,[\"doll\"]],false],[0,\" has \"],[1,[23,1,[\"name\"]],false],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "doll/pods/items/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("doll/router", ["exports", "doll/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('dolls', {
      path: '/'
    }, function () {
      this.route('doll', {
        path: ':slug'
      }, function () {
        this.route('items');
        this.route('bio');
      });
    });
  });
});
;define("doll/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("doll/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("doll/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("doll/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("doll/tests/mirage/mirage.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | mirage');
  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/factories/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/post.js should pass ESLint\n\n');
  });
  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/scenarios/default.js should pass ESLint\n\n8:3 - \'server\' is not defined. (no-undef)');
  });
  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;define("doll/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("doll/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("doll/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("doll/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('doll/config/environment', [], function() {
  var prefix = 'doll';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("doll/app")["default"].create({"name":"doll","version":"0.0.0+e00432a2"});
          }
        
//# sourceMappingURL=doll.map
