import Route from '@ember/routing/route';

export default Route.extend({

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('notes', model);
  },

  model() {
    return this.get('store').findAll('note');
  }
});
