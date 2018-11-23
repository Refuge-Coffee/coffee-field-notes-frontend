import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  note: null,
  isShowingModal: false,
  adminLoggedIn: true,

  coffee: computed('note', function() {
    return this.get('note').get('bean');
  }),

  actions: {
    displayNote() {
      this.toggleProperty('isShowingModal');
    },

    editNote() {
      console.log("Going to edit note.");
    }

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
