import { DBHeroes } from './Constants/DBHeroes'
import Pony from './Models/Pony'
import DragonBall from './Models/DragonBall'
import Elf from './Models/Elf'
import Box from './Models/Box'
import GiftWrap from './Models/GiftWrap'

// Step #1
console.log("--- STEP #1 ---")


var pony = new Pony()
var kakarot = new DragonBall(DBHeroes.Kakarot)

pony.isMoved()
kakarot.isMoved()

// Step #2
console.log("--- STEP #2 ---")

var majdi = new Elf('makiboto')

var box = new Box()
majdi.pack(box, kakarot)
box.open()
majdi.pack(box, kakarot)

var paper = new GiftWrap()
majdi.pack(paper, pony)
majdi.pack(paper, pony)

var toy = majdi.unpack(paper)
console.log(toy instanceof Pony)
var r = majdi.unpack(paper)
console.log(r == null)
