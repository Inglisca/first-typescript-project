var dogBreed: string;

dogBreed = "Labrador"

console.log(dogBreed);

let list: number [] = [5,2,3];

console.log(list[0]);
//
for (let i of list){
    console.log(i);
    console.log("----");
}

let stringList: string[] =["asd","asd2"];
for (let i of stringList){
    console.log(i);
}


enum Race {Human,Dwarf,Gnome}
let camsCharacterRace: Race = Race.Human

console.log (camsCharacterRace);

if(camsCharacterRace==Race.Human){
    console.log("Human")
    console.log(camsCharacterRace)
}

function whatsTheRace(race: Race): string {
    let raceToReturn: string;

    switch(race) {
        case Race.Human: {
            raceToReturn = "Human"
            break;
        }
        case Race.Dwarf: {
            raceToReturn = "Dwarf"
            break;
        }
        case Race.Gnome: {
            raceToReturn = "Gnome"
            break;
        }
    }
    return raceToReturn;
}

console.log(whatsTheRace(camsCharacterRace))
//last message