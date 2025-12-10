# Ejercicios de Programación Orientada a Objetos (POO) --- JavaScript

## 📌 Ejercicio 1 --- Clase Persona

### 📗 Requerimientos

Crear una clase llamada **Persona** con las siguientes características:

### ✔️ Propiedades obligatorias

-   `nombre` (string)
-   `edad` (number)

### ✔️ Métodos obligatorios

#### `presentarse()`

Retorna:\
**"Hola, me llamo `<nombre>`{=html} y tengo `<edad>`{=html} años."**

### ✔️ Validaciones mínimas

-   `edad` debe ser un número positivo.
    -   Si no se cumple → `throw new Error("Edad inválida")`
-   `nombre` debe tener al menos 2 caracteres.
    -   Si no se cumple → `throw new Error("Nombre inválido")`

### ✔️ Instancias a crear

-   Persona 1: **Juan**, 20 años\
-   Persona 2: **Romina**, 32 años

### ✔️ Flujo de prueba

1.  Crear instancias.\
2.  Llamar a `presentarse()`.\
3.  Mostrar mensaje en consola.\
4.  Probar una persona con edad negativa → **debe fallar**.

------------------------------------------------------------------------

## 📌 Ejercicio 2 --- Clase Producto

### 📗 Propiedades obligatorias

-   `nombre`
-   `precio`

### 📗 Métodos

#### `aplicarDescuento(porcentaje)`

-   `porcentaje` debe estar entre **1 y 100**.\

-   Cálculo del nuevo precio:

        precio = precio - (precio * porcentaje / 100)

-   Retorna el precio actualizado.

#### `mostrarPrecio()`

Retorna:\
**"Precio actual: \$`<precio>`{=html}"**

### ✔️ Validaciones

-   `precio` debe ser mayor a 0.\
-   El descuento debe estar entre 1 y 100.\
-   `nombre` es obligatorio.

### ✔️ Flujo de prueba

1.  Crear producto **"Teclado"**, precio **\$10.000**.\
2.  Aplicar **20%** → el precio debe quedar **\$8.000**.\
3.  Aplicar **100%** → el precio debe quedar **\$0**.\
4.  Intentar aplicar **120%** → debe lanzar error.

------------------------------------------------------------------------

## 📄 Autor

Ejercicios preparados para práctica de Programación Orientada a Objetos
(POO) en JavaScript.
