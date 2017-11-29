import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').createRecord('note', {});
  },

  setupController(controller, model) {
    this._super(...arguments);
    let note = model;
    controller.set('note', note);
  }
});
