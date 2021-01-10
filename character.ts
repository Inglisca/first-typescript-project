import { Weapon } from "./weapon"

export class Character {
    characterName: string
    weapon: Weapon

    constructor(characterName: string, weapon: Weapon) {
        this.characterName = characterName
        this.weapon = weapon
    }

    attack(): string {
        var returnString: string = this.characterName + " attacks a nefaious target with his " + this.weapon.weaponName + " for " + this.weapon.averageDamage.toString();
        return returnString
    }


}