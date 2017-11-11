import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      dateRecorded: '12-12-2017',
      timeOfDay: 'Afternoon',
      content: 'Grand Old Mansion',
    }];
  }
});
