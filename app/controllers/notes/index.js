import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  store: service(),

  notes: null,

  actions: {
    sortByCreatedAt(direction) {
      let newNotes = this.get('store').query('note', {
        sort_by: 'created_at',
        direction: direction
      });
      this.set('notes', newNotes);
    }
  }
});
