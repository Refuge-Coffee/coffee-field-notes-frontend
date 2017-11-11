import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  dateRecorded: DS.attr('date'),
  datePublished: DS.attr('date')
});
