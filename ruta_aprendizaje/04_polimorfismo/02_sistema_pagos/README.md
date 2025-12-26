# 🧪 Prueba Técnica --- Sistema de Pagos (POO y Polimorfismo)

## 📌 Objetivo General

Diseñar e implementar un **sistema de pagos extensible** utilizando
**Programación Orientada a Objetos en JavaScript**, aplicando
correctamente:

-   Herencia
-   Polimorfismo real (sin condicionales por tipo)
-   Encapsulamiento de reglas de negocio
-   Diseño abierto a extensión y cerrado a modificación (OCP)

El sistema debe permitir **agregar nuevos métodos de pago sin modificar
código existente**.

------------------------------------------------------------------------

## 🧠 Conceptos Evaluados

-   Diseño de clases base abstractas
-   Sobrescritura de métodos
-   Validaciones específicas por comportamiento
-   Uso correcto de `super`
-   Iteración polimórfica
-   Manejo de errores mediante excepciones

------------------------------------------------------------------------

## 🏗️ Estructura del Proyecto

    pagos-poo/
    │
    ├── src/
    │   ├── models/
    │   │   ├── Pago.js
    │   │   ├── PagoTarjeta.js
    │   │   ├── PagoEfectivo.js
    │   │   └── PagoTransferencia.js
    │   │
    │   └── main.js
    │
    ├── tests/
    │   └── pagos.test.js   (opcional)
    │
    └── README.md

------------------------------------------------------------------------

## 🟦 Ejercicio --- Sistema de Pagos

### 1️⃣ Clase Base: `Pago`

#### 📘 Responsabilidad

Representa un **pago genérico**. Centraliza reglas comunes y define la
interfaz que deben cumplir todos los pagos.

> ⚠️ No debe instanciarse directamente en escenarios reales.

------------------------------------------------------------------------

### 📗 Propiedades Obligatorias

  Propiedad   Tipo     Descripción
  ----------- -------- ----------------------------
  monto       number   Monto del pago (mayor a 0)

------------------------------------------------------------------------

### 🟧 Validaciones Obligatorias

#### `validarMonto()`

-   Verifica que `monto`:
    -   Sea de tipo `number`
    -   Sea mayor a 0

**Error**

    throw new Error("Monto inválido")

------------------------------------------------------------------------

### 📘 Métodos Obligatorios

#### `validar()`

-   Método reutilizable por clases hijas
-   Ejecuta **todas las validaciones comunes**
-   Debe ser llamado desde los métodos `procesar()` de las subclases

**Responsabilidades** - Validar monto - Preparar el flujo para
validaciones específicas

------------------------------------------------------------------------

#### `procesar()`

-   Método base **abstracto**
-   No debe contener lógica real
-   Debe ser sobrescrito obligatoriamente

**Error sugerido**

    throw new Error("Método procesar() debe ser implementado")

------------------------------------------------------------------------

## 2️⃣ Clase: `PagoTarjeta` (extends `Pago`)

### 📘 Responsabilidad

Gestiona pagos realizados con **tarjeta de crédito o débito**.

------------------------------------------------------------------------

### 📗 Propiedades Adicionales

  Propiedad          Tipo     Descripción
  ------------------ -------- --------------------------------
  numeroTarjeta      string   Número de tarjeta (16 dígitos)
  fechaVencimiento   string   Fecha de vencimiento (MM/YY)

------------------------------------------------------------------------

### 🟧 Validaciones Obligatorias

#### `validarNumeroTarjeta()`

-   Debe contener **exactamente 16 dígitos numéricos**

**Error**

    throw new Error("Número de tarjeta inválido")

------------------------------------------------------------------------

#### `validarVencimiento()`

-   La fecha debe ser **posterior al mes/año actual**
-   No se permite tarjeta vencida

**Error**

    throw new Error("Tarjeta vencida")

------------------------------------------------------------------------

### 📘 Método Sobrescrito

#### `procesar()`

1.  Llama a `super.validar()`
2.  Ejecuta validaciones propias
3.  Retorna un mensaje de éxito

**Retorno**

    "Pago con tarjeta aprobado"

------------------------------------------------------------------------

## 3️⃣ Clase: `PagoEfectivo` (extends `Pago`)

### 📘 Responsabilidad

Gestiona pagos realizados en efectivo.

------------------------------------------------------------------------

### 🟧 Validaciones

-   Solo aplica validaciones heredadas del padre (`monto > 0`)

------------------------------------------------------------------------

### 📘 Método Sobrescrito

#### `procesar()`

1.  Llama a `super.validar()`
2.  Retorna confirmación

**Retorno**

    "Pago en efectivo registrado"

------------------------------------------------------------------------

## 4️⃣ Clase: `PagoTransferencia` (extends `Pago`)

### 📘 Responsabilidad

Gestiona pagos realizados mediante transferencia bancaria.

------------------------------------------------------------------------

### 📗 Propiedades Adicionales

  Propiedad   Tipo     Descripción
  ----------- -------- -----------------------------
  cbu         string   Clave bancaria (22 dígitos)
  banco       string   Nombre del banco

------------------------------------------------------------------------

### 🟧 Validaciones Obligatorias

#### `validarCBU()`

-   Exactamente **22 dígitos numéricos**

**Error**

    throw new Error("CBU inválido")

------------------------------------------------------------------------

#### `validarBanco()`

-   No puede ser string vacío

**Error**

    throw new Error("Banco requerido")

------------------------------------------------------------------------

### 📘 Método Sobrescrito

#### `procesar()`

1.  Llama a `super.validar()`
2.  Ejecuta validaciones específicas
3.  Retorna confirmación

**Retorno**

    "Pago por transferencia confirmado"

------------------------------------------------------------------------

## 🧪 Casos de Prueba Obligatorios

### ✔️ Flujo Correcto

-   Crear instancias de:
    -   `PagoTarjeta`
    -   `PagoEfectivo`
    -   `PagoTransferencia`
-   Almacenarlas en un **mismo arreglo**
-   Iterar llamando **únicamente** a `procesar()`

------------------------------------------------------------------------

### ❌ Errores a Probar

-   Monto negativo
-   Tarjeta vencida
-   Número de tarjeta incorrecto
-   CBU inválido
-   Banco vacío

------------------------------------------------------------------------

## ⚠️ Restricciones Técnicas

❌ No usar `if`, `else` o `switch` para diferenciar tipos de pago\
✅ El polimorfismo debe resolver el comportamiento

------------------------------------------------------------------------

## 🎯 Resultado Esperado

-   Polimorfismo real
-   Código limpio y desacoplado
-   Validaciones encapsuladas
-   Diseño escalable
-   Nivel entrevista técnica **intermedio**

------------------------------------------------------------------------

## 💡 Bonus Opcional

-   Logging de pagos
-   Simulación de gateway externo
-   Pruebas unitarias
-   Nuevo medio de pago sin modificar código existente

------------------------------------------------------------------------

📦 **Este ejercicio refleja escenarios reales evaluados en entrevistas
técnicas**
