import Furniture from './Furniture'

export default class Table extends Furniture {

  constructor() {
      super()
      this.content = []
  }

  take() {
    return this.content.pop()
  }

  takePosition(index) {
    let pos = this.content.indexOf(index)
    return this.content.splice(pos,1)

  }

  put(item) {
    if (this.content.length < 10) {
      this.content.push(item)
    }else {
      console.log('No place')
    }
  }

}
