import Component from '@ember/component';

export default Component.extend({
  bean: null,
  isShowingModal: false,

  actions: {
    displaybean() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
