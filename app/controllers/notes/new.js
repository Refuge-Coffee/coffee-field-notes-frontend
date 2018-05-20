import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({

  note: null,
  newBean: false,

  actions: {
    createNote: function() {
      const flashMessages = get(this, 'flashMessages');
      let note = this.get('note');
      note.save().then(() => {
        flashMessages.success('Successfully saved!');
      });
    },

    updateTimeofDay: function(timeOfDay) {
      let note = this.get('note');
      note.set('timeOfDay', timeOfDay);
    },

    toggleNewCoffee: function() {
      this.toggleProperty('newBean');
    }
  }
});
