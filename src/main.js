import { DBHeroes } from './Constants/DBHeroes'
import Pony from './Models/Pony'
import DragonBall from './Models/DragonBall'

// Step #1
console.log("--- STEP #1 ---")


var pony = new Pony()
var kakarot = new DragonBall(DBHeroes.Kakarot)

pony.isMoved()
kakarot.isMoved()
