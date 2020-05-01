'use strict';

define("doll/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/application/route.js should pass ESLint\n\n4:2 - Unnecessary semicolon. (no-extra-semi)');
  });
  QUnit.test('pods/dolls/doll/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/dolls/doll/route.js should pass ESLint\n\n8:2 - Unnecessary semicolon. (no-extra-semi)');
  });
  QUnit.test('pods/dolls/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/dolls/route.js should pass ESLint\n\n88:2 - Unnecessary semicolon. (no-extra-semi)');
  });
  QUnit.test('pods/items/route.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/items/route.js should pass ESLint\n\n38:6 - Unnecessary semicolon. (no-extra-semi)');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define("doll/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('doll/pods/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'doll/pods/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('doll/pods/components/header/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'doll/pods/components/header/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('doll/pods/dolls/doll/bio/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'doll/pods/dolls/doll/bio/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('doll/pods/dolls/doll/items/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'doll/pods/dolls/doll/items/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('doll/pods/dolls/doll/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'doll/pods/dolls/doll/template.hbs should pass TemplateLint.\n\ndoll/pods/dolls/doll/template.hbs\n  6:0  error  Invalid alt attribute. Words such as `image`, `photo,` or `picture` are already announced by screen readers.  require-valid-alt-text\n');
  });
  QUnit.test('doll/pods/dolls/index/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'doll/pods/dolls/index/template.hbs should pass TemplateLint.\n\ndoll/pods/dolls/index/template.hbs\n  9:12  error  Invalid alt attribute. Words such as `image`, `photo,` or `picture` are already announced by screen readers.  require-valid-alt-text\n');
  });
  QUnit.test('doll/pods/items/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'doll/pods/items/template.hbs should pass TemplateLint.\n\n');
  });
});
define("doll/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/application/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/application/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/dolls/doll/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/dolls/doll/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/dolls/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/dolls/route-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/pods/items/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/pods/items/route-test.js should pass ESLint\n\n');
  });
});
define("doll/tests/test-helper", ["doll/app", "doll/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("doll/tests/unit/pods/application/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("doll/tests/unit/pods/dolls/doll/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dolls/doll', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dolls/doll');
      assert.ok(route);
    });
  });
});
define("doll/tests/unit/pods/dolls/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | dolls', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:dolls');
      assert.ok(route);
    });
  });
});
define("doll/tests/unit/pods/items/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | items', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:items');
      assert.ok(route);
    });
  });
});
define('doll/config/environment', [], function() {
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

require('doll/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
