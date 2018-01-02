import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.get('store').createRecord('coffee');
  },

  setupController(controller, model) {
    this._super(...arguments);
    let coffee = model;
    controller.set('coffee', coffee);
  }
});
