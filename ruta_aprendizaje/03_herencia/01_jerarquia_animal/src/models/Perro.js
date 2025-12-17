import Animal from '../models/Animal.js';
export default class Perro extends Animal{
  constructor(name, age) {
    super(name, age);
  }

  makeSound() {
    console.log("Guau")
  }
}
