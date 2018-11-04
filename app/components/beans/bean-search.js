import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { inject } from '@ember/service';


export default Component.extend({
  
  // Passed in from component.
  note: null,

  // Set in component.
  searchTerm: "",
  searchResults: null,
  selectedResult: null,

  store: inject(),

  searchResults: computed('searchTerm', function() {
    return this.get('store').query('bean', {
      filter: {
        query: get(this, 'searchTerm')
      }
    });
  }),

  actions: {
    async selectBean(beanId) {
      let bean = await this.get('store').findRecord('bean', beanId);
      set(this, 'selectedResult', bean);
      set(this, 'note.bean', bean);
    }
  }
});
