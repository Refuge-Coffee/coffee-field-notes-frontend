import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  dateRecorded: DS.attr('string'),
  timeOfDay: DS.attr('string'),
  publishedAt: DS.attr('date'),
  coffee: DS.belongsTo('coffee')
});
