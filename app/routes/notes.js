import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      datePublished: Date("11/12/2013"),
      content: 'Grand Old Mansion',
    }];
  }
});
