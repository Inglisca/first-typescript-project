"use strict";
exports.__esModule = true;
exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon(averageDamage, weaponName) {
        this.averageDamage = averageDamage;
        this.weaponName = weaponName;
    }
    Weapon.prototype.getWeaponAttackString = function (strengthModifier) {
        var totalAverageDamage = this.averageDamage + strengthModifier;
        var returnString = "He deals " + totalAverageDamage + " with his " + this.weaponName;
        return returnString;
    };
    return Weapon;
}());
exports.Weapon = Weapon;
