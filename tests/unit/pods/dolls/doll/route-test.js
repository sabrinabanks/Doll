import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dolls/doll', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dolls/doll');
    assert.ok(route);
  });
});
