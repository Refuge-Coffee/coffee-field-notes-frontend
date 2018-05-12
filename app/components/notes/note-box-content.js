import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  note: null,
  isShowingModal: false,

  coffee: computed('note', function() {
    return this.get('note').get('bean');
  }),

  actions: {
    displayNote() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
