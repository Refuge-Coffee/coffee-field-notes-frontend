import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  origin: DS.attr('string'),
  elevation: DS.attr('number'),
  notes: DS.hasMany('note')
});
