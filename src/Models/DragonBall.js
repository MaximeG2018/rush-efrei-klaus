import Figurine from './Figurine';

export default class DragonBall extends Figurine {

  #_character

  constructor(character) {
    super()
    this.#_character = character
    this.type = `Dragon Ball figurine ${this.#_character}`
    this.init()
  }

  init() {
    console.log (`
${this.type} is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !
  `)
  }

  isMoved() {
    console.log('Kamé Hamé Ha!')
  }
}
