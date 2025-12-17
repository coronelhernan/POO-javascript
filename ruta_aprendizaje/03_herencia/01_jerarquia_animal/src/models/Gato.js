import Animal from '../models/Animal.js';

export default class Gato extends Animal{
  constructor(name, age) {
    super(name, age);
  }

  makeSound() {
    console.log("Miau")
  }
}