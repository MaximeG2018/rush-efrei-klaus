
export default class Toy {

  constructor(type) {
    this.type = type
  }

  isMoved() {
    if (this.constructor.name == 'Pony') {
      console.log('Huuuuuuhu!');
    }
    else if (this.constructor.name == 'DragonBall') {
       console.log('Kamé Hamé Ha!');
    }
   else {
     console.log(" ???? ")
   }
  }

  getType() {
    return this.type;
  }
}
