import Component from '@ember/component';

export default Component.extend({
  note: null,
  isShowingModal: false,

  actions: {
    displayNote() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
