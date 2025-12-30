
# 🧪 Prueba Técnica — Sistema de Notificaciones (POO y Polimorfismo)

## 📌 Objetivo General

Diseñar e implementar un **sistema de notificaciones extensible** utilizando **Programación Orientada a Objetos en JavaScript**, aplicando correctamente:

- Herencia
- Polimorfismo real (sin condicionales por tipo)
- Encapsulamiento de comportamiento
- Diseño abierto a extensión y cerrado a modificación (OCP)
- Iteración polimórfica

El sistema debe permitir **agregar nuevos canales de notificación sin modificar código existente**.

---

## 🧠 Conceptos Evaluados

- Diseño de clases base abstractas
- Sobrescritura de métodos
- Polimorfismo dinámico
- Uso correcto de `super`
- Separación de responsabilidades
- Iteración sobre objetos heterogéneos
- Diseño orientado a comportamiento

---

## 🏗️ Estructura del Proyecto

```
notificaciones-poo/
│
├── src/
│   ├── models/
│   │   ├── Notificacion.js
│   │   ├── Email.js
│   │   ├── SMS.js
│   │   └── Push.js
│   │
│   └── main.js
│
└── README.md
```

---

## 🟦 Ejercicio — Sistema de Notificaciones

## 1️⃣ Clase Base: `Notificacion`

### 📘 Responsabilidad

Representa una **notificación genérica**.

Su responsabilidad principal es **definir el contrato común** que todas las notificaciones concretas deben cumplir.
Esta clase **no sabe cómo se envía** una notificación, solo define que **toda notificación debe poder enviarse**.

📌 Esta clase existe para habilitar **polimorfismo**, no para ser utilizada directamente.

⚠️ **No debe instanciarse directamente en escenarios reales.**

---

### 📗 Propiedades Obligatorias

| Propiedad | Tipo   | Descripción |
|---------|--------|-------------|
| mensaje | string | Contenido de la notificación |

📌 El mensaje es común a todos los tipos de notificación, por lo tanto vive en la clase base.

---

### 📘 Métodos de Validación (Base)

#### `validateMensaje()`

Responsabilidad:
- Verificar que el mensaje:
  - Sea de tipo `string`
  - No esté vacío

Error sugerido:

```js
throw new Error("Mensaje inválido");
```

---

### 📘 Método `validate()`

Responsabilidad:
- Centralizar validaciones comunes
- Preparar el flujo para validaciones específicas en las subclases

```txt
No debe conocer detalles de Email, SMS o Push
```

---

### 📘 Método Obligatorio: `enviar()`

```js
enviar() {
  throw new Error("Método enviar() debe ser implementado");
}
```

Responsabilidad:
- Definir la **interfaz común**
- Obligar a las clases hijas a implementar su propio comportamiento

📌 Este método simula un **método abstracto** en JavaScript.

---

## 2️⃣ Clase: `Email` (extends Notificacion)

### 📘 Responsabilidad

Representa una notificación enviada por **correo electrónico**.

Hereda:
- `mensaje`
- `validate()`
- El contrato `enviar()`

Define:
- El comportamiento concreto de envío por email

---

### 📘 Método Sobrescrito: `enviar()`

Responsabilidad:
- Ejecutar validaciones comunes
- Simular el envío del email
- Retornar un mensaje de confirmación

Retorno esperado:

```txt
"Email enviado: <mensaje>"
```

---

## 3️⃣ Clase: `SMS` (extends Notificacion)

### 📘 Responsabilidad

Representa una notificación enviada por **mensaje de texto (SMS)**.

---

### 📘 Método Sobrescrito: `enviar()`

Responsabilidad:
- Ejecutar validaciones heredadas
- Simular el envío del SMS

Retorno esperado:

```txt
"SMS enviado: <mensaje>"
```

---

## 4️⃣ Clase: `Push` (extends Notificacion)

### 📘 Responsabilidad

Representa una **notificación push**.

---

### 📘 Método Sobrescrito: `enviar()`

Responsabilidad:
- Ejecutar validaciones heredadas
- Simular el envío de una notificación push

Retorno esperado:

```txt
"Notificación push enviada: <mensaje>"
```

---

## 🧪 Casos de Prueba Obligatorios

### ✔️ Flujo Correcto

- Crear instancias de:
  - `Email`
  - `SMS`
  - `Push`

- Todas las instancias deben recibir un mensaje válido.

- Almacenar todas las notificaciones en un mismo arreglo.

- Iterar el arreglo llamando **únicamente** al método `enviar()`.

- El sistema:
  - No debe conocer el tipo concreto de notificación.
  - No debe utilizar condicionales para diferenciar comportamientos.
  - Debe confiar exclusivamente en el contrato definido por la clase base.

---

### ❌ Errores a Probar

- Intentar instanciar la clase base `Notificacion`.

- Llamar al método `enviar()` sin sobrescribirlo en una clase hija.

- Enviar una notificación con:
  - Mensaje vacío (`""`)
  - Mensaje con solo espacios (`"   "`)
  - Mensaje que no sea de tipo `string`

- Verificar que cada error:
  - Lance una excepción.
  - Contenga un mensaje descriptivo.

---

### 🔍 Validaciones Implícitas a Evaluar

- Todas las notificaciones deben validar el mensaje **antes** de enviarse.
- Las validaciones comunes deben estar encapsuladas en la clase base.
- Las clases hijas no deben duplicar lógica de validación común.

## ⚠️ Restricciones Técnicas

❌ No usar `if`, `else` o `switch` para diferenciar tipos  
❌ No usar `instanceof`  
✅ El comportamiento debe resolverse mediante **polimorfismo**

---

## 🎯 Resultado Esperado

- Polimorfismo real
- Código desacoplado
- Diseño limpio y mantenible
- Fácil extensión (ej: WhatsApp, Slack, Discord)
- Nivel **entrevista técnica junior/intermedio**

---

## 💡 Bonus Opcional

- Logger de notificaciones
- Simulación de proveedor externo
- Tests unitarios
- Nuevo canal de notificación sin modificar código existente

---

📦 Este ejercicio refleja un **patrón real utilizado en sistemas de notificaciones y mensajería modernos**.
