class Vehicle {
    constructor(Make, Model, Year) {

    this.Make = Make;
    this.Model = Model;
    this.Year = Year;
    }
    
    honk() {
        return ("Beep.")
    }
    toString() {
        return (`The vehicle is a ${this.Make} ${this.Model} from ${this.Year}.`)
    }
}

class Car extends Vehicle {
    constructor(Make, Model, Year){
        super(Make, Model, Year)
        this.numWheels = 4;
    }     
}

class Motorcycle extends Vehicle {
    constructor(Make, Model, Year){
        super(Make, Model, Year)
        this.numWheels = 2;
    }  
    revEngine() {
        return ('VROOM!!!')
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.vehicles = [];
    }
    
    add(automobile) {
        if (!(automobile instanceof Vehicle)) {
            return ("Only vehicles are allowed in here!")
        }
        else if  (this.vehicles.length < this.capacity) {
            this.vehicles.push(automobile)
                return ("Vehicle added!")
        } else if (this.vehicles.length >= this.capacity) {
            return ("Sorry, we're full.")
        }
    }
}