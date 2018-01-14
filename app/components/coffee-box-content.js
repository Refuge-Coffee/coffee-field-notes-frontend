import Component from '@ember/component';

export default Component.extend({
  coffee: null,

  actions: {
    displayCoffee() {
      console.log(this.get('coffee'));
    }
  }
});
