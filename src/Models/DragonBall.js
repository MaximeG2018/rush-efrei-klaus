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
    super.isMoved()
  }

  // randomCharacter() {
  //     let nb = getRandomInt(3)
  //     if (nb == 0) { return this.#_character = DBHeroes.Kakarot }
  //     if (nb == 1) { return this.#_character = DBHeroes.bejita }
  //     if (nb == 2) { return this.#_character = DBHeroes.beerus }
  //     return this.#_character = DBHeroes.kamesennin }
  // }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
