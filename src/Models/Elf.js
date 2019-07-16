import GiftWrap from './GiftWrap'
import Box from './Box'

import ConveyorBelt from './ConveyorBelt'

export default class Elf {

  constructor(nickname) {
    this.nickname = nickname
  }

  getNickname() {
    return this.nickname
  }

  setNickname(nickname) {
    return this.nickname = nickname
  }

  pack(packaging, toy) {
    if (packaging.isOpen == false && packaging instanceof Box) {
      console.log('Sorry this package is not open')
    }
    else if (packaging.toy) {
      console.log('Sorry this package already filled')
    }
    else {
      packaging.insert(toy)
      console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getType()} ~~`)
      }

  }

  unpack(packaging) {
    if (packaging.isOpen == true || !packaging.toy) {
      console.log('Sorry this package is already empty')
    } else {
      console.log(`Ooooooh! Just unpacking the toy ~~ ${packaging.toy.getType()} ~~`)
      let toy = packaging.toy
      packaging.toy = null
      return toy
    }
  }

  put(furniture, object) {
    if (furniture.isBusy == true && furniture instanceof ConveyorBelt) {
      console.log('0 place')
      return
    } else {
      furniture.put(object)
    }

  }

  look(tab) {
    console.log(tab)
  }

}
