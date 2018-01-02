import Controller from '@ember/controller';

export default Controller.extend({

  coffee: null,

  actions: {
    createCoffee: function() {
      const flashMessages = Ember.get(this, 'flashMessages');
      let coffee = this.get('coffee');
      coffee.save().then((res) => {
        flashMessages.success('Successfully saved!');
      });
    }
  }
});
