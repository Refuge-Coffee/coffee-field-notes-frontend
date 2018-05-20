import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({

  note: null,
  newBean: false,

  flashMessages: inject(),

  actions: {
    createNote: function() {
      const flashMessages = get(this, 'flashMessages');
      let note = this.get('note');
      note.save().then(() => {
        flashMessages.success('Successfully saved!');
      }).catch(function() {
        flashMessages.danger('Something went wrong when saving your note.');
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
