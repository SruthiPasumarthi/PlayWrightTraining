class Animal{
    constructor(food,sleeptime){
        this.food = food;
        this.sleeptime = sleeptime;
    }
    eat(){
        return this.food;
    }
    sleep(){
        return this.sleeptime;
    }
}

class Bird extends Animal{
    fly(){
        return "is flying";
    }
}

let Parrot = new Bird("Guvva",8);
console.log("parrot eats ",Parrot.eat()); 
console.log("Parrot sleep time is ", Parrot.sleep(), "hrs");
console.log("Parrot", Parrot.fly());