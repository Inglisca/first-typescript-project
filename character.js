"use strict";
exports.__esModule = true;
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(characterName, weapon, strengthModifier, dexterityModifier, constitutionModifier, intelligenceModifier, wisdomModifier, charismaModifier) {
        this.characterName = characterName;
        this.weapon = weapon;
        this.strengthModifier = strengthModifier;
        this.dexterityModifier = dexterityModifier;
        this.constitutionModifier = constitutionModifier;
        this.intelligenceModifier = intelligenceModifier;
        this.wisdomModifier = wisdomModifier;
        this.charismaModifier = charismaModifier;
    }
    Character.prototype.attack = function () {
        var returnString = this.characterName + " attacks a nefaious target! ";
        returnString += this.weapon.getWeaponAttackString(this.strengthModifier);
        return returnString;
    };
    return Character;
}());
exports.Character = Character;
