import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({

  coffee: null,

  actions: {
    createCoffee: function() {
      const flashMessages = get(this, 'flashMessages');
      let coffee = this.get('coffee');
      coffee.save().then((res) => {
        flashMessages.success('Successfully saved!');
      });
    }
  }
});
