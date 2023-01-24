// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health ,
        this.strength = strength
    }
    attack(){
       return this.strength 
    }
    receiveDamage(damage){
       this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength),
        this.name = name
    }

    receiveDamage(damage){
        this.health -= damage
        if(this.health> 0){
        return `${this.name} has received ${damage} points of damage`
        }else{
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier{
    constructor( health, strength) {
        super(health, strength) 
        
    }
  
    receiveDamage(damage){
        this.health -= damage
        if(this.health> 0){
        return `A Saxon has received ${damage} points of damage`
        }else{
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(Viking){
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }

    vikingAttack(){

        let saxonNumber = Math.floor(Math.random()*this.saxonArmy.length)
        let vikingNumber = Math.floor(Math.random()*this.vikingArmy.length)

        let viking = this.vikingArmy[vikingNumber]
        console.log(this.saxonArmy, this.vikingArmy);
        const damage = this.saxonArmy[saxonNumber].receiveDamage(viking.attack())
        if(this.saxonArmy[saxonNumber].health <= 0){
            this.saxonArmy.splice(this.saxonArmy[saxonNumber], 1)
    
        }
        console.log(damage)
        
        return damage
    }
    saxonAttack(){
        let saxonNumber = Math.floor(Math.random()*this.saxonArmy.length)
        let vikingNumber = Math.floor(Math.random()*this.vikingArmy.length)

        let saxon = this.saxonArmy[saxonNumber]
       
        const damage = this.vikingArmy[vikingNumber].receiveDamage(saxon.attack())
        if(this.vikingArmy[saxonNumber].health <= 0){
            this.vikingArmy.splice(this.vikingArmy[saxonNumber], 1)
    
        }
        
        return damage
    }
    showStatus(){

    }
}
