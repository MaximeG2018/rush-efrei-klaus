import { DBHeroes } from './Constants/DBHeroes'
import Pony from './Models/Pony'
import DragonBall from './Models/DragonBall'
import Elf from './Models/Elf'
import Box from './Models/Box'
import GiftWrap from './Models/GiftWrap'
import Table from './Models/Table'
import ConveyorBelt from './Models/ConveyorBelt'
import Furniture from './Models/Furniture'

console.log('\n')

// Step #1
console.log("--- STEP #1 ---")

var pony = new Pony()
var kakarot = new DragonBall(DBHeroes.Kakarot)

pony.isMoved()
kakarot.isMoved()

console.log('\n')

// Step #2
console.log("--- STEP #2 ---")

var elrond = new Elf('makiboto')
var box = new Box()
var paper = new GiftWrap()

elrond.pack(box, kakarot)
box.open()
elrond.pack(box, kakarot)

elrond.pack(paper, pony)
elrond.pack(paper, pony)

var toy = elrond.unpack(paper)
console.log(toy instanceof Pony)
var r = elrond.unpack(paper)
console.log(r == null)
console.log('\n')


// Step #3
console.log("--- STEP #3 ---")

var table = new Table()
var conveyor = new ConveyorBelt()

elrond.put(table, paper)
elrond.put(table, pony)
elrond.put(table, box)
elrond.put(table, paper)
elrond.put(table, pony)

elrond.put(table, box)
elrond.put(table, paper)
elrond.put(table, pony)
elrond.put(table, box)
elrond.put(table, paper)

elrond.put(table, paper) // 11eme Gift => Error

elrond.look(table)

conveyor.in()
console.log(conveyor)
conveyor.out()
console.log(conveyor)
