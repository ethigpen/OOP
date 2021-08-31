class Ninja{
    constructor(nameInput, healthInput){
        this.name = nameInput
        this.health = healthInput
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`My name is ${this.name}`)
        return this
    }

    showStats(){
        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
        return this
    }

    drinkSake(){
        this.health += 10
        return this
    }
}

class Sensei extends Ninja{
    constructor (nameInput){
    super(nameInput, 200)
    this.speed = 10;
    this.strength = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`${this.name} says: Be yourself; everyone else is already taken.`)
    }
}


const ninja1 = new Ninja("Hyabusa", 50);
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();