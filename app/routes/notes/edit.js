import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').findRecord('note', params.id);
  },

  setupController(controller, model) {
    this._super(...arguments);
    let note = model;
    controller.set('note', note);
  }

});