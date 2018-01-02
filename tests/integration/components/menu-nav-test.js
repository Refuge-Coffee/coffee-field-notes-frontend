import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menu-nav', 'Integration | Component | menu nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{menu-nav}}`);

  assert.equal(this.$('.navLinks')[0].text.trim(), 'Notes');
  assert.equal(this.$('.navLinks')[1].text.trim(), 'Coffee');
});
