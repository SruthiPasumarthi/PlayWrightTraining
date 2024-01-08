function Flowers(name){
    this.name = name;
}

Flowers.prototype.plants = function color(){
    console.log(`${this.name} is red`);
}

function Smell(name,perfume){
    Flowers.call(this, name);
    this.perfume = perfume;
} 

Smell.prototype = Object.create(Flowers.prototype);
Smell.prototype.constructor = Smell;

Smell.prototype.leaves = function () {
    console.log(`${this.name} have leaves`);
}

let rose = new Smell("Rose", "Fresh smell");

console.log(rose.name);
console.log(rose.perfume);
rose.plants();
rose.leaves();


