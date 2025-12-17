import Admin from '../src/models/Admin.js';
import Editor from '../src/models/Editor.js';
import Viewer from '../src/models/Viewer.js';

/* 
* Casos de Prueba:
* Crear:
* 1 Admin
* 1 Editor
* 1 Viewer
* Guardarlos en un array mezclado
* Iterar llamando getPermisos()
* Probar:
* Login exitoso
* Login fallido
*/

const admin = new Admin('admin@test.com', "123456");
const editor = new Editor('editor@test.com', "123456");
const viewer = new Viewer('viewer@test.com', '123456');

const userRoles = [admin, editor, viewer];

// Iterando los permisos de los usuarios
userRoles.forEach(user => {
  console.log(`Permisos de ${user.constructor.name}:`);
  console.log(user.getPermits());
});

// Probando login
const testLogin = (user, password) => {
  console.log(`${user.constructor.name} | password: "${password}" →`,user.login(password));
};

testLogin(admin, "123456"); // Esperado: Login exitoso
testLogin(admin, "1234"); // Esperado: Contraseña incorrecta
testLogin(editor, "123456"); // Esperado: Login exitoso
testLogin(editor, "1234"); // Esperado: Contraseña incorrecta
testLogin(viewer, "123456"); // Esperado: Login exitoso
testLogin(viewer, "1234"); // Esperado: Contraseña incorrecta
