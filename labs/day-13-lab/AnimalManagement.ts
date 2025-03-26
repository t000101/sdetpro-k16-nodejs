import AnimalController from "./AnimalController";
import Dog from "./Dog";
import Horse from "./Horse";
import Tiger from "./Tiger";

const horse = new Horse();
const tiger = new Tiger();
const dog = new Dog();

console.log(`${horse.getName()}, with speed: ${horse.getSpeed()}`);
console.log(`${tiger.getName()}, with speed: ${tiger.getSpeed()}`);
console.log(`${dog.getName()}, with speed: ${dog.getSpeed()}`);

const winner = AnimalController.getWinnerInRacing([horse, tiger, dog]);




