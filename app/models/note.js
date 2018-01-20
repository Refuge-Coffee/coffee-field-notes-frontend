import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  timeOfDay: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('string'),
  coffee: DS.belongsTo('coffee')
});
