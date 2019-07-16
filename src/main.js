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

var majdi = new Elf('makiboto')
var box = new Box()
var paper = new GiftWrap()

majdi.pack(box, kakarot)
box.open()
majdi.pack(box, kakarot)

majdi.pack(paper, pony)
majdi.pack(paper, pony)

var toy = majdi.unpack(paper)
console.log(toy instanceof Pony)
var r = majdi.unpack(paper)
console.log(r == null)
console.log('\n')


// Step #3
console.log("--- STEP #3 ---")

var table = new Table()
var conveyor = new ConveyorBelt()

majdi.put(table, paper)
majdi.put(table, pony)
majdi.put(table, box)
majdi.put(table, paper)
majdi.put(table, pony)

majdi.put(table, box)
majdi.put(table, paper)
majdi.put(table, pony)
majdi.put(table, box)
majdi.put(table, paper)

//majdi.put(table, paper) // 11eme cadeau

//majdi.look(table)

conveyor.in()
conveyor.in()
conveyor.in()
