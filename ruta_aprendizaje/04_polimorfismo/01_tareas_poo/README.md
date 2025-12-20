# 🧪 Prueba Técnica --- Tareas y SubTareas (Polimorfismo)

Este ejercicio simula una **prueba técnica real**, centrada en el uso de
**polimorfismo**, **sobrescritura de métodos** y **validaciones de
reglas de negocio** mediante Programación Orientada a Objetos en
JavaScript.

------------------------------------------------------------------------

## 📌 Objetivo General

Desarrollar un sistema de gestión de tareas que soporte: - Tareas
principales - Subtareas dependientes - Control estricto de estados -
Prevención de inconsistencias lógicas

El sistema debe permitir: - Cambiar el estado de una tarea -
Sobrescribir comportamiento en subtareas - Validar dependencias entre
tareas - Aplicar polimorfismo sin condicionales

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto (recomendada)

    tareas-poo/
    │
    ├── src/
    │   ├── models/
    │   │   ├── Tarea.js
    │   │   └── SubTarea.js
    │   │
    │   └── main.js
    │
    ├── tests/
    │   └── tareas.test.js   (opcional)
    │
    └── README.md

------------------------------------------------------------------------

# 🟦 Ejercicio --- Tareas y SubTareas

## 1️⃣ Clase Tarea (Base)

### 📗 Propiedades obligatorias

  Propiedad   Tipo     Requerido   Descripción
  ----------- -------- ----------- --------------------------------
  titulo      string   ✔           Título descriptivo de la tarea
  estado      string   ✔           "pendiente" o "completada"

------------------------------------------------------------------------

### 🟧 Validaciones obligatorias

1.  **Título válido**
    -   Mínimo 3 caracteres
    -   Error: `throw new Error("Título inválido")`
2.  **Estado válido**
    -   Solo puede ser `"pendiente"` o `"completada"`
    -   Error: `throw new Error("Estado inválido")`

------------------------------------------------------------------------

### 📘 Método obligatorio

#### `changeStatus()`

-   Alterna el estado de la tarea:
    -   pendiente → completada
    -   completada → pendiente
-   No recibe parámetros
-   Debe funcionar de forma genérica para cualquier tarea

------------------------------------------------------------------------

## 2️⃣ Clase SubTarea (extends Tarea)

Representa una tarea dependiente de una tarea principal.

### 📗 Propiedades adicionales

  ---------------------------------------------------------------------------------
  Propiedad              Tipo      Requerido   Descripción
  ---------------------- --------- ----------- ------------------------------------
  tareaPadreCompletada   boolean   ✔           Indica si la tarea padre está
                                               completada

  ---------------------------------------------------------------------------------

------------------------------------------------------------------------

### 📘 Método sobrescrito

#### `changeStatus()`

Reglas obligatorias: - Si el estado actual es `"pendiente"` y se intenta
completar: - Verificar que `tareaPadreCompletada === true` - Si la tarea
padre **no está completada**: - Lanzar error:\
`throw new Error("La tarea padre no está completada")` - Si la
validación pasa: - Cambiar el estado correctamente

> ⚠️ No se permiten condicionales externos para validar el estado. La
> lógica debe vivir dentro de la clase.

------------------------------------------------------------------------

# 🧪 Casos de Prueba Obligatorios

1.  Crear una tarea principal en estado `"pendiente"`
2.  Crear al menos 2 subtareas asociadas a esa tarea
3.  Intentar completar una subtarea antes de completar la tarea
    principal\
    → **Debe lanzar error**
4.  Completar la tarea principal
5.  Completar correctamente las subtareas
6.  Verificar estados finales en consola

------------------------------------------------------------------------

# 🎯 Resultado Esperado

Un sistema de tareas que demuestre:

-   Polimorfismo real
-   Sobrescritura de métodos con reglas de negocio
-   Encapsulación de validaciones
-   Código claro, mantenible y escalable
-   Nivel acorde a entrevistas técnicas intermedias

------------------------------------------------------------------------

