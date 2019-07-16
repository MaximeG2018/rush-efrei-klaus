import Furniture from './Furniture'

import DragonBall from './DragonBall'
import Box from './Box'
import Pony from './Pony'

import { DBHeroes } from '../Constants/DBHeroes'

export default class ConveyorBelt extends Furniture {

  constructor() {
    super()
    this.item = null
    this.isBusy = false

  }

  put(item) {
    this.item = item
  }

  in() {

    let newGift
    let nb = this.getRandomInt(3)

    switch(nb) {
      case 0 :
         newGift = new DragonBall()
         break;
      case 1 :
        newGift = new Box()
        break;
      case 2 :
        newGift = new Pony()
        break;
      default:
        console.log('pas d idée')
    }

  }

  out() {

  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
