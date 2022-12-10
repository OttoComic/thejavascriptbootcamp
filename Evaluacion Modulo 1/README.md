# Controlador de gastos

Aplicación para el control de gastos y de ingresos por parte de un usuario. El menú inicial permite realizar las siguientes acciones:

1-Añadir un gasto.
2-Añadir un ingreso.
3-Listado de gastos.
4-Listado de ingresos.
5-Balance general.
6-Modifcar o eliminar una entrada.

## 1-2 Añadir un gasto/ingreso.

Cuando se coge cualquiera de las dos primeras opciones, el programa pedirá tanto el concepto como la cantidad. Automáticamente dependiendo de la opción que se elija, se añade e si es un gasto o un ingreso:

Ejemplo añadir gasto (opción 1):
Entrada: "Gasto"(automático)
Concepto: "Comics"
Cantidad: 15

Ejemplo añadir ingreso (opción 2):
Entrada: "Ingreso"(automático)
Concepto: "Ilustración"
Cantidad: 50

## 3-4 Listado de gastos/ingresos.

Permite la visualización de las tablas con los valores de los gastos y/o ingresos que se ha introducido.

## 5 Balance General

Está opción permite visualiza:

-La suma de los gastos totales introducidos.
-La suma de los ingresos totales introducidos.
-El balance general una vez se han restado los gastos totales a los ingresos totales.

## 6 Modificar o eliminar una entrada.

Se visualizará por consola el tabal global de gastos e ingresos.

Esta opción del menú, nos dará paso a un segundo menú que no preguntará si lo que deseamos es eliminar  o editar una entrada.


### 6.1 Eliminar una entrada

Para eliminar una entrada en concreto, consultar en el índice que asigna la tabla de la fila a eliminar e introducirlo en la petición solicitada.

### 6.2 Editar una entrada

Permite modificar únicamente el concepto y/o la cantidad introducida.

(No se podrá modificar el tipo de entrada es decir no se puede cambiar gasto por ingres y viceversa)

Para editar una entrada en concreto, consultar en el índice que asigna la tabla de la fila a editar e introducirlo en la petición solicitada.

Una vez seleccionada la entrada se nos pedirá si se desea modificar uno de los dos valores o ambos. Pidiéndonos el nuevo valor en cada caso.
