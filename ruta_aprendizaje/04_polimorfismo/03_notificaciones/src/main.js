import Notification from "./models/Notification.js";
import Email from "../src/models/Email.js";
import SMS from "../src/models/SMS.js";
import Push from "../src/models/Push.js";

/*
 * Casos de Prueba:
 *
 * ✔️ Flujo Correcto
 * - Crear instancias de:
 *   - Email
 *   - SMS
 *   - Push
 *
 * - Todas las notificaciones deben recibir un mensaje válido.
 *
 * - Almacenar todas las notificaciones en un mismo arreglo.
 *
 * - Iterar el arreglo llamando únicamente al método enviar().
 *
 * ❌ Errores a Probar
 *
 * - Intentar instanciar la clase base Notificacion.
 *
 * - Llamar a enviar() sin sobrescribirlo en una clase hija.
 *
 * - Enviar una notificación con:
 *   - Mensaje vacío ("")
 *   - Mensaje con solo espacios ("   ")
 *   - Mensaje que no sea de tipo string
 */

// Casos validos:
const notifications = [
  new Email("Bienvenido"), 
  new SMS("Código de verificación"), 
  new Push("Tenés una nueva alerta")
];

// Iterando los casos validos con su metodo de envio
notifications.forEach((msg) => {
  console.log(`${msg.send()}`);
});

// Casos no validos:
// Instanciar clase base y llamar send()
try {
  const n = new Notification("Hola");
  n.send();
} catch (e) {
  console.error(e.message);
}

// Mensaje no string
try {
  const n = new Email(89);
  n.send();
} catch (e) {
  console.error(e.message);
}

// Mensaje vacío
try {
  const n = new SMS("");
  n.send();
} catch (e) {
  console.error(e.message);
}

// Mensaje con espacios
try {
  const n = new Push("   ");
  n.send();
} catch (e) {
  console.error(e.message);
}
