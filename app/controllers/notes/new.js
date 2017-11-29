import Controller from '@ember/controller';

export default Controller.extend({

  note: null,

  actions: {
    createNote: function() {
      let note = this.get('note');
      note.save();
    }
  }
});
