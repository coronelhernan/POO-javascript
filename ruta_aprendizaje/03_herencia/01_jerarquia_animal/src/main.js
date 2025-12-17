import Animal from '../src/models/Animal.js';
import Perro from '../src/models/Perro.js';
import Gato from '../src/models/Gato.js';

/* 
* Casos de Prueba
* Crear al menos:
* 1 instancia de Animal
* 1 instancia de Perro
* 1 instancia de Gato
* Guardarlos en un array mezclado
* Iterar el array llamando hacerSonido()
* Verificar que cada instancia responde según su tipo real
*/

// Instancias
const animal = new Animal("martin", 2);
const perro = new Perro("toby", 4);
const gato = new Gato("Lina", 2);

// Agrupando los animales
const animals = [animal, perro, gato];

// Iterando el polimorfismo (emitiendo sonido)
animals.forEach(animal => {
  animal.makeSound();
})
