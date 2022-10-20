class ExpressoMachine{
  constructor(buttons, make, model, price){
    this.buttons = buttons;
    this.make = make;
    this.model = model;
    this.price = price;
  }
  turnOn(param1, param2){
    console.log('Good Day I Am On Now..')
  }
  steam(){
    console.log('ITS SUMMER SALE 50%%%%% OFF!')
  }
  brew(){
    console.log('Good Stuff Coming YOUR WAY!!!!')
  }
  
}
const Gaggia = new ExpressoMachine('digital', 'standard', 'ethiop', '600');
console.log(Gaggia.buttons)
