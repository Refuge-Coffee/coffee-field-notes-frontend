import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | roasters/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:roasters/index');
    assert.ok(route);
  });
});
