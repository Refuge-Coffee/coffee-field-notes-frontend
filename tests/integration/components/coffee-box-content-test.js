import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('coffee-box-content', 'Integration | Component | coffee box content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{coffee-box-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#coffee-box-content}}
      template block text
    {{/coffee-box-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
