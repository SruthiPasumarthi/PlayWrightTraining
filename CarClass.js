class car{
    constructor(makes, model, year){
        this.makes = makes;
        this.model = model;
        this.year = year;
    }
    displayDetails(){
        console.log(this.makes + this.model + this.year);
    }
}

let Car = new car("Hyundai","Venue",2040);
Car.displayDetails();