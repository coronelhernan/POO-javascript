# 🧪 Prueba Técnica --- Jerarquía Animal (Herencia y Polimorfismo)

Este ejercicio simula una **prueba técnica real**, enfocada en el uso
correcto de **herencia**, **sobrescritura de métodos** y
**polimorfismo** en JavaScript usando Programación Orientada a Objetos.

------------------------------------------------------------------------

## 📌 Objetivo General

Desarrollar una jerarquía de clases que represente distintos tipos de
animales, partiendo de una clase base común, respetando principios de
POO.

El sistema debe permitir: - Crear animales de distintos tipos -
Compartir estructura común - Sobrescribir comportamientos - Demostrar
polimorfismo sin condicionales

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto (recomendada)

    jerarquia-animal/
    │
    ├── src/
    │   ├── models/
    │   │   ├── Animal.js
    │   │   ├── Perro.js
    │   │   └── Gato.js
    │   │
    │   └── main.js
    │
    ├── tests/
    │   └── animal.test.js   (opcional)
    │
    └── README.md

------------------------------------------------------------------------

# 🟦 Ejercicio --- Jerarquía Animal

## 1️⃣ Clase Animal (Base)

### 📗 Propiedades obligatorias

  Propiedad   Tipo     Requerido   Descripción
  ----------- -------- ----------- -------------------
  nombre      string   ✔           Nombre del animal
  edad        number   ✔           Edad del animal

------------------------------------------------------------------------

### 🟧 Validaciones obligatorias

1.  **Nombre válido**
    -   Mínimo 2 caracteres
    -   Error: `throw new Error("Nombre inválido")`
2.  **Edad válida**
    -   Número mayor o igual a 0
    -   Error: `throw new Error("Edad inválida")`

------------------------------------------------------------------------

### 📘 Método obligatorio

#### `hacerSonido()`

-   Implementación por defecto

-   Devuelve:

    "Sonido genérico"

------------------------------------------------------------------------

## 2️⃣ Clase Perro (extends Animal)

### 📘 Método sobrescrito

#### `hacerSonido()`

Devuelve:

    "Guau!"

------------------------------------------------------------------------

## 3️⃣ Clase Gato (extends Animal)

### 📘 Método sobrescrito

#### `hacerSonido()`

Devuelve:

    "Miau!"

------------------------------------------------------------------------

# 🧪 Casos de Prueba Obligatorios

1.  Crear al menos:
    -   1 instancia de `Animal`
    -   1 instancia de `Perro`
    -   1 instancia de `Gato`
2.  Guardarlos en un array mezclado
3.  Iterar el array llamando `hacerSonido()`
4.  Verificar que cada instancia responde según su tipo real

------------------------------------------------------------------------

# 🎯 Resultado Esperado

Una jerarquía correctamente implementada que demuestre: - Uso correcto
de `extends` - Sobrescritura de métodos - Polimorfismo real - Código
limpio y mantenible

------------------------------------------------------------------------

Ejercicio típico de entrevista técnica ✔️
