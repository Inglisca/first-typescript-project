var dogBreed: string;

dogBreed = "Labrador"

console.log(dogBreed);

let list: number [] = [5,2,3];

console.log(list[0]);

for (let i of list){
    console.log(i);
    console.log("----");
}

let stringList: string[] =["asd","asd2"];
for (let i of stringList){
    console.log(i);
}


enum Race {Human,Dwarf,Gnome}
let camsCharacterrace: Race = Race.Human

console.log (camsCharacterrace);