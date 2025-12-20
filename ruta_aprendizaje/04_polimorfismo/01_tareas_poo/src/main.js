import Task from '../src/models/Task.js';
import SubTask from '../src/models/SubTask.js';

/*
* Casos de Prueba:
* Crear una tarea principal en estado "pendiente"
* Crear al menos 2 subtareas asociadas a esa tarea
* Intentar completar una subtarea antes de completar la tarea principal → Debe lanzar error
* Completar la tarea principal
* Completar correctamente las subtareas
* Verificar estados finales en consola
*/

console.log("🧪 INICIO DE CASOS DE PRUEBA");

// Crear tarea principal
const mainTask = new Task("Aprender POO", "pendiente");
console.log("Tarea principal creada:", mainTask);

// Crear subtareas
const subTask1 = new SubTask("Leer documentación", "pendiente", mainTask);
const subTask2 = new SubTask("Practicar ejercicios", "pendiente", mainTask);

console.log("Subtarea 1 creada:", subTask1);
console.log("Subtarea 2 creada:", subTask2);

// Funcion que se encarga de cambiar el estado de la subtarea
const tryCompleteSubTask = (subTask) => {
  try {
    console.log("Intentando completar la subtarea...");
    subTask.changeStatus();
  } catch (error) {
    console.error("Error esperado:", error.message);
  }
}

tryCompleteSubTask(subTask1);

// Completar tarea principal
console.log("Completando tarea principal...");
mainTask.changeStatus();
console.log("Estado tarea principal:", mainTask.state);

// Completar subtareas
console.log("Completando subtareas...");
subTask1.changeStatus();
subTask2.changeStatus();

// Estados finales
console.log("Estado final tarea principal:", mainTask.state);
console.log("Estado final subtarea 1:", subTask1.state);
console.log("Estado final subtarea 2:", subTask2.state);

console.log("✅ FIN DE CASOS DE PRUEBA");
