# 🚀 Desafíos Profesionales de Programación Orientada a Objetos (POO) en JavaScript

Este documento contiene **5 pruebas técnicas profesionales** para que practiques **POO aplicada**, no solo teoría. Cada ejercicio simula un caso real que podrías encontrar en entrevistas o proyectos.

Cada challenge incluye:
- 🎯 **Objetivo del ejercicio**
- 🧱 **Requerimientos funcionales**
- 🔐 **Conceptos de POO que debes usar** (Encapsulación, Herencia, Polimorfismo, Abstracción…)
- ⭐ **Extras opcionales (nivel senior)**

---

## 1️⃣ Sistema de Gestión de Usuarios (Roles y Permisos)
### 🎯 Objetivo
Crear un pequeño sistema donde existan distintos tipos de usuarios con permisos distintos.

### 🧱 Requerimientos
- Clase base `User` con propiedades básicas: nombre, email.
- Clases hijas: `Admin`, `Editor`, `Viewer`.
- Cada tipo de usuario debe tener métodos distintos:
  - Admin → puede crear, editar y borrar.
  - Editor → puede editar.
  - Viewer → solo puede leer.
- Crear un `AccessController` con un método: `can(user, action)`.

### 🔐 Conceptos POO
- **Herencia:** Crear clases que extiendan de User.
- **Polimorfismo por subtipo:** Los distintos usuarios deben comportarse diferente.
- **Encapsulación:** Controlar permisos dentro de métodos.

### ⭐ Extra
- Implementar un sistema de logs de acciones.
- Validar permisos antes de realizar cada acción.

---

## 2️⃣ Gestor de Tareas con Estado y Subtareas
### 🎯 Objetivo
Modelar un sistema de tareas estilo Trello.

### 🧱 Requerimientos
- Clase `Task`: título, descripción, estado (pendiente, en progreso, completada).
- Método `changeStatus()` con validaciones.
- Clase `SubTask` que extienda de Task.
- Clase `TaskList` para manejar un conjunto de tareas.
- Métodos:
  - `addTask()`
  - `removeTask()`
  - `getTasksByStatus(status)`

### 🔐 Conceptos POO
- **Herencia:** SubTask extiende Task.
- **Abstracción:** Encapsular lógica de cambio de estado.
- **Encapsulación:** Validar que una subtarea no pueda estar “completada” si la principal no lo está.

### ⭐ Extra
- Crear un método `progress()` que devuelva avance en porcentaje.

---

## 3️⃣ Sistema de Facturación (Productos, Carrito y Facturas)
### 🎯 Objetivo
Simular el backend de un carrito de compras.

### 🧱 Requerimientos
- Clase `Product`: id, nombre, precio.
- Clase `CartItem`: producto + cantidad.
- Clase `Cart`: debe permitir agregar, quitar y calcular total.
- Clase `Invoice` que reciba un carrito y genere:
  - subtotal
  - impuestos
  - total
- Los impuestos deben calcularse mediante un método polimórfico:
  - IVA general (21%)
  - IVA reducido (10%)

### 🔐 Conceptos POO
- **Composición**: Cart contiene CartItems.
- **Polimorfismo:** Distintos tipos de IVA (clases diferentes).
- **Abstracción:** Factura que oculta cálculos internos.

### ⭐ Extra
- Agregar cupones de descuento.
- Registrar facturas emitidas.

---

## 4️⃣ Simulador de Biblioteca (Prestamos y Gestión de Libros)
### 🎯 Objetivo
Modelar una mini biblioteca digital.

### 🧱 Requerimientos
- Clase `Book`: título, autor, categoría, id.
- Clase `User`: nombre, email.
- Clase `Library`: contiene los métodos:
  - `addBook()`
  - `removeBook()`
  - `lendBook(bookId, userId)`
  - `returnBook(bookId)`
- Registrar quién tiene cada libro prestado.
- Evitar prestar un libro ya prestado.

### 🔐 Conceptos POO
- **Encapsulación:** Estado interno del libro (disponible / prestado).
- **Abstracción:** Library debe ser el único objeto que maneja préstamos.
- **Polimorfismo por subtipo:** Crear tipos de libros distintos (por ejemplo `DigitalBook`, `PrintedBook`).

### ⭐ Extra
- Registrar historial de préstamos.
- Método `search(criteria)` para buscar libros.

---

## 5️⃣ Sistema de Notificaciones (Email, SMS, Push)
### 🎯 Objetivo
Diseñar un sistema donde cada tipo de notificación se envía de forma distinta.

### 🧱 Requerimientos
- Clase abstracta `Notification` con método `send()` (lanza error si no está implementado).
- Clases hijas:
  - `EmailNotification`
  - `SMSNotification`
  - `PushNotification`
- Un `NotificationCenter` con método `sendNotification(notification, message)`.
- Debe poder usarse sin saber cuál tipo de notificación es.

### 🔐 Conceptos POO
- **Abstracción:** Clase abstracta Notification.
- **Polimorfismo:** Cada clase implementa send() distinto.
- **Inversión de dependencias (OOP sólido):** NotificationCenter no debe depender de tipos concretos.

### ⭐ Extra
- Enviar notificaciones en lote.
- Manejar errores en los envíos.

---

## 🏁 ¿Cómo practicar estos challenges?
1. Crea un archivo nuevo por challenge.
2. Define primero las clases con sus métodos.
3. Simula datos reales (como en una prueba técnica).
4. Prueba cada método con distintos casos.
5. Documenta lo que haces.

Si querés, puedo ayudarte a:
- Corregir tus soluciones
- Proponer una arquitectura más profesional
- Convertir cualquiera de estos ejercicios en una **app completa** (CLI o Web)
- Generar tests automáticos con Jest

Solo decime por cuál challenge querés empezar 💪🔥

