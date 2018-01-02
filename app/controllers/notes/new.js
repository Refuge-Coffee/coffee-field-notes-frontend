import Controller from '@ember/controller';

export default Controller.extend({

  note: null,

  actions: {
    createNote: function() {
      const flashMessages = Ember.get(this, 'flashMessages');
      let note = this.get('note');
      note.save().then((res) => {
        flashMessages.success('Successfully saved!');
      });
    }
  }
});
