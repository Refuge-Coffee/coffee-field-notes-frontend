export default function(){
  // Add your transitions here, like:
  this.transition(
    this.fromRoute('notes'),
    this.toRoute('beans'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
