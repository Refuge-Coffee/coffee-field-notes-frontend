import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').createRecord('bean');
  },

  setupController(controller, model) {
    this._super(...arguments);
    let bean = model;
    controller.set('bean', bean);
  }
});
