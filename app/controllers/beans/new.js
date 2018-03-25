import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({

  bean: null,

  actions: {
    createbean: function() {
      const flashMessages = get(this, 'flashMessages');
      let bean = this.get('bean');
      bean.save().then(() => {
        flashMessages.success('Successfully saved!');
      });
    }
  }
});
