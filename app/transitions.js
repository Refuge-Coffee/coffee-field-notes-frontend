export default function(){
  // Add your transitions here, like:
  this.transition(
    this.fromRoute('notes'),
    this.toRoute('beans'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
  this.transition(
    this.fromRoute('beans'),
    this.toRoute('locations'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('notes'),
    this.toRoute('locations'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
