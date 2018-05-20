import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({

  note: null,

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
    }
  }
});
