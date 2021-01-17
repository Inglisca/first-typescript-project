import {Character} from './character';
import { Weapon } from "./weapon";


var maul = new Weapon(6.5,"Maul")

var gigantius = new Character("Gigantius", maul, 5,2,0,0,0,0)

var halberd = new Weapon(5.5, "Halberd")

var durdror = new Character("Durdror", halberd, 5,0,0,5,0,0)


var characterArray: Array<Character> = [gigantius, durdror];

for (let i of characterArray){
    console.log(i.attack());
}