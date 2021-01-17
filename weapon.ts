export class Weapon {
    averageDamage: number
    weaponName: string


    constructor(averageDamage: number, weaponName: string){
        this.averageDamage = averageDamage
        this.weaponName = weaponName
    }

    getWeaponAttackString(strengthModifier: number){
        var totalAverageDamage:number = this.averageDamage + strengthModifier

        var returnString: string = "He deals " + totalAverageDamage + " with his " + this.weaponName

        return returnString
    }

}