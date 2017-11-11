import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      dateRecorded: '12-12-2017',
      timeOfDay: 'Afternoon',
      content: 'So So Dank',
    },{
      dateRecorded: '12-15-2017',
      timeOfDay: 'Morning',
      content: 'Something was really sweet',
    },
    {
      dateRecorded: '12-16-2017',
      timeOfDay: 'Evening',
      content: 'Something was really bitter',
    }];
  }
});
