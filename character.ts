import { Weapon } from "./weapon"

export class Character {
    characterName: string
    weapon: Weapon
    strengthModifier: number
    dexterityModifier: number
    constitutionModifier: number
    intelligenceModifier: number
    wisdomModifier: number
    charismaModifier: number
    

    constructor(characterName: string, weapon: Weapon, strengthModifier: number, dexterityModifier: number, constitutionModifier: number, intelligenceModifier: number, wisdomModifier: number, charismaModifier: number ) {
        this.characterName = characterName
        this.weapon = weapon
        this.strengthModifier = strengthModifier
        this.dexterityModifier = dexterityModifier
        this.constitutionModifier = constitutionModifier
        this.intelligenceModifier = intelligenceModifier
        this.wisdomModifier = wisdomModifier
        this.charismaModifier = charismaModifier
    }

    attack(): string {
        var returnString: string = this.characterName + " attacks a nefaious target with his " + this.weapon.weaponName + " for " + this.weapon.averageDamage.toString();
        return returnString
    }


}