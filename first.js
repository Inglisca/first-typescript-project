var dogBreed;
dogBreed = "Labrador";
console.log(dogBreed);
var list = [5, 2, 3];
console.log(list[0]);
//
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
    console.log("----");
}
var stringList = ["asd", "asd2"];
for (var _a = 0, stringList_1 = stringList; _a < stringList_1.length; _a++) {
    var i = stringList_1[_a];
    console.log(i);
}
var Race;
(function (Race) {
    Race[Race["Human"] = 0] = "Human";
    Race[Race["Dwarf"] = 1] = "Dwarf";
    Race[Race["Gnome"] = 2] = "Gnome";
})(Race || (Race = {}));
var camsCharacterRace = Race.Human;
console.log(camsCharacterRace);
if (camsCharacterRace == Race.Human) {
    console.log("Human");
    console.log(camsCharacterRace);
}
function whatsTheRace(race) {
    var raceToReturn;
    switch (race) {
        case Race.Human: {
            raceToReturn = "Human";
            break;
        }
        case Race.Dwarf: {
            raceToReturn = "Dwarf";
            break;
        }
        case Race.Gnome: {
            raceToReturn = "Gnome";
            break;
        }
    }
    return raceToReturn;
}
console.log(whatsTheRace(camsCharacterRace));
