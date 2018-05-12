import Component from '@ember/component';

export default Component.extend({
  location: null,
  isShowingModal: false,

  actions: {
    displayLocation() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
