const Elevator = require('./elevator.js');
const Person = require('./person.js');

const myElevator = new Elevator;

let person1 = new Person("Lance", 0, 10);
let person2 = new Person("Robert", 2, 4);
let person3 = new Person("Ashley", 10, 3);
let person4 = new Person("Melissa", 5, 2);
let person5 = new Person("Brad", 7, 8);

myElevator.start();

myElevator.call(person1);
myElevator.call(person2);
myElevator.call(person3);
myElevator.call(person4);
myElevator.call(person5);

myElevator._passengersEnter()


