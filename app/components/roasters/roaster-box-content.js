import Component from '@ember/component';

export default Component.extend({
  roaster: null,
  isShowingModal: false,

  actions: {
    displayRoaster() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
