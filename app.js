const person1 = {
    name: "Josh",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person1.name // "Josh"
person1.sayHello(); 

const person2 = {
    name: "Garrett",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person3 = {
    name: "Haylee",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person4 = {
    name: "Katherine",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person5 = {
    name: "Denita",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}


// function Person(name, city, age) {
//     this.name = name; // creating a property on the object called name.
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
// }

class Person {
    constructor(name, city, age) { // new Person calls this function
        this.name = name; // creating a property on the object called name. 
        this.city = city;
        this.age = age;
    }

    sayHello() { // this is a method
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}`);
    }
}

const person6 = new Person("Bob", "Hoover", 89); // creating an instance of the class Person
const person7 = new Person("Anne", "Baltimore", 50);

person6.sayHello();
person7.sayHello();

console.log(String.prototype)

// Inheritance
class Vehicle {
    constructor(manufacturer, type, numOfWheels) {
        this.manufacturer = manufacturer;
        this.type = type;
        this.numOfWheels = numOfWheels;
    }

    aboutVehicle() {
        console.log(`This is a ${this.manufacturer} ${this.type}. It has ${this.numOfWheels} wheels.`);
    }
}

const vehicle = new Vehicle("Honda", "sedan", 4);
vehicle.aboutVehicle();

class Truck extends Vehicle {
    constructor(manufacturer, type, numOfWheels, numOfDoors, hasBed) {
        super(manufacturer, type, numOfWheels); // calls the parent class constructor function
        this.numOfDoors = numOfDoors;
        this.hasBed = hasBed;
    }

    aboutVehicle() {
        console.log(`This is a ${this.manufacturer} ${this.type}. It has ${this.numOfWheels} wheels. It has a truckbed and has ${this.numOfDoors} doors.`);
    }
}

const truck = new Truck("Dodge", "truck", 8, 8, true);
truck.aboutVehicle(); 

class Sedan extends Vehicle {
    constructor(manufacturer, type, numOfWheels, size, mpg) {
        super(manufacturer, type, numOfWheels);
        this.size = size;
        this.mpg = mpg;
    }

    // no aboutVehicle method, so it defaults to the parent classes aboutVehicle method.
}

const sedan = new Sedan("Honda", "sedan", 4, "medium", 30);

class Motorcycle extends Vehicle {
    constructor(manufacturer, type, numOfWheels, hasHandlebars, hasDoors) {
        super(manufacturer, type, numOfWheels);
        this.hasHandlebars = hasHandlebars;
        this.hasDoors = hasDoors;
    }

    // no aboutVehicle method, so it defaults to the parent classes aboutVehicle method.
}

const motorcycle1 = new Motorcycle("Harley-Davidson", "motorcycle", 3, true, false);
console.log(motorcycle1);