import GiftWrap from './GiftWrap'
import Box from './Box'

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
}


// Sorry this package is not open
// Yeaaaah! Just packing the toy ~~ Dragon Ball figurine SANGOKU ~~
// Yeaaaah! Just packing the toy ~~ Pony #1 ~~
// Sorry this package already filled
// Ooooooh! Just unpacking the toy ~~ Pony #1 ~~
// true
// Sorry this package is already empty
// true
