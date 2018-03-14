import Component from '@ember/component';

export default Component.extend({
  coffee: null,
  isShowingModal: false,

  actions: {
    displayCoffee() {
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});
