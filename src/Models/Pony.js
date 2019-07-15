import Toy from './Toy'

export default class Pony extends Toy {

  static #_nb = 1;

  constructor() {
    super()
    Pony.id = Pony.#_nb
    this.type = `Pony #${Pony.id}`

    Pony.#_nb ++

    this.init()
  }

  init() {
    console.log(`
${this.type} is singing -->
Dou-double poney, j’fais izi money
D’où tu m’connais ? Parle moi en billets violets
Dou-double poney, j’fais izi money`)
    }

  isMoved(){
    console.log('Huuuuuuhu!')
  }
}
