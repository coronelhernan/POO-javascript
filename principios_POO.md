# Principios Fundamentales de la Programación Orientada a Objetos (POO)

La Programación Orientada a Objetos es un paradigma que organiza el
código alrededor de **objetos**, que combinan datos (propiedades) y
comportamientos (métodos). Sus principios permiten crear software más
modular, reutilizable y fácil de mantener.

------------------------------------------------------------------------

## 🧱 1. Encapsulación

La **encapsulación** consiste en ocultar los detalles internos de un
objeto y exponer solo lo necesario.

### Objetivo:

-   Proteger los datos.
-   Evitar que el estado interno se manipule de forma indebida.
-   Controlar el acceso mediante métodos (getters y setters).

### Ejemplo conceptual:

-   Una clase *User* puede ocultar su propiedad `password`.
-   El acceso se realiza solo mediante métodos validados.

------------------------------------------------------------------------

## 🧬 2. Herencia

La **herencia** permite crear clases basadas en otras clases,
reutilizando código y compartiendo comportamientos.

### Objetivo:

-   Reutilizar lógica común.
-   Evitar duplicar código.
-   Crear jerarquías de objetos.

### Ejemplo conceptual:

-   Clase `Person` → clase `Employee` puede heredar sus propiedades y
    agregar nuevas.

------------------------------------------------------------------------

## 🎭 3. Polimorfismo

El **polimorfismo** permite que diferentes clases respondan al mismo
método de formas distintas.

### Objetivo:

-   Permitir que distintos objetos compartan la misma interfaz.
-   Cambiar comportamientos según el tipo de objeto.

### Ejemplo conceptual:

-   Método `speak()`:
    -   En `Dog` → "Guau".
    -   En `Cat` → "Miau".

------------------------------------------------------------------------

## 🧩 4. Abstracción

La **abstracción** consiste en simplificar la complejidad mostrando solo
lo esencial del objeto.

### Objetivo:

-   Reducir detalles innecesarios.
-   Crear modelos conceptuales más claros.
-   Trabajar con una visión más simple del sistema.

### Ejemplo conceptual:

-   Un objeto *Auto* expone `acelerar()`, pero no muestra cómo funciona
    internamente el motor.

------------------------------------------------------------------------

## 🔗 5. Composición (relación "tiene un")

La **composición** crea objetos complejos a partir de objetos más
pequeños.

### Objetivo:

-   Crear sistemas flexibles y fáciles de modificar.
-   Evitar depender estrictamente de jerarquías de herencia.

### Ejemplo conceptual:

-   Un objeto `Car` está compuesto por objetos:
    -   `Engine`
    -   `Wheel`
    -   `Transmission`

------------------------------------------------------------------------

## 🧠 6. Responsabilidad Única (SRP)

Cada clase debe tener **una sola razón para cambiar**.

### Objetivo:

-   Clases simples.
-   Código fácil de mantener.
-   Menor acoplamiento entre módulos.

### Ejemplo conceptual:

-   Una clase `Logger` solo registra información.
-   No debería enviar emails, ni guardar usuarios, etc.

------------------------------------------------------------------------

## ⚙️ Beneficios de aplicar POO correctamente

-   Código más limpio y fácil de entender.
-   Mayor reutilización.
-   Menor duplicación.
-   Mejor mantenimiento y escalabilidad.
-   Facilita la colaboración entre desarrolladores.

------------------------------------------------------------------------

## 📌 Conclusión

Los principios de la POO no son solo teoría: son herramientas que te
permiten escribir mejor código.\
Aplicarlos correctamente mejora la calidad de tus aplicaciones, reduce
errores y acelera el desarrollo.
