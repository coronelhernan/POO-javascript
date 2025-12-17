export default class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    this.validateName();
    this.validateAge();
  }

  validateName() {
    if(typeof this.name !== 'string' || this.name.trim().length < 2) {
      throw new Error("Nombre inválido")
    }
  }

  validateAge() {
    if(typeof this.age !== 'number' || this.age < 0) {
      throw new Error("Edad inválida")
    }
  }

  makeSound() {
    console.log("Sonido genérico");
  }
}