// definicion de variables globales

const arrayImportes = JSON.parse(localStorage.getItem("tabla")) || [];
var error = "Por favor, elija una opción válida";
var error2 = "Noy hay registros disponibles";

// 1-2 REGISTRO DE INGRESOS/GASTOS
const addImporte = (arrayImportes, entry) => {
  let concepto = prompt("Introduce un concepto");
  let importe = parseFloat(prompt("Introduce un importe"));
  let valor = {
    Entrada: entry,
    Concepto: concepto,
    Cantidad: importe,
  };

  arrayImportes.push(valor);
  guardarTabla();
};

const guardarTabla = () => {
  localStorage.setItem("tabla", JSON.stringify(arrayImportes));
};

//3-TABLA DE GASTOS

const tablaGastos = (arrayImportes) => {
  if (arrayImportes.length == 0) {
    alert(error2);
  } else {
    console.table(
      arrayImportes
        .filter((gasto) => gasto.Entrada === "Gasto")
        .map((valorGasto) => valorGasto)
    );
  }
};

//4-TABLA DE INGRESOS

const tablaIngresos = (arrayImportes) => {
  console.table(
    arrayImportes
      .filter((ingreso) => ingreso.Entrada === "Ingreso")
      .map((valorIngreso) => valorIngreso)
  );
};

//5-BALANCE DE INGRESOS

const balanceFinal = (arrayImportes) => {
  // 5.1-Gastos totales
  const gastosTotal = (arrayImportes) => {
    return arrayImportes
      .filter((gasto) => gasto.Entrada === "Gasto")
      .reduce((acc, actual) => acc + actual.Cantidad, 0);
  };
  console.log(`Los gastos totales son de ${gastosTotal(arrayImportes)}€`);

  //5.2-Ingresos totales:

  const ingresosTotal = (arrayImportes) => {
    return arrayImportes
      .filter((ingreso) => ingreso.Entrada === "Ingreso")
      .reduce((acc, actual) => acc + actual.Cantidad, 0);
  };
  console.log(`Los ingresos totales son de ${ingresosTotal(arrayImportes)} €`);

  // 5.3-Balance final

  let balance = ingresosTotal(arrayImportes) - gastosTotal(arrayImportes);

  console.log(`El balance general es de ${balance} €`);
};

// 6 ELIMINAR/EDITAR UNA ENTRADA
//6.1 Eliminar entrada

const eliminaEntrada = () => {
  var i = parseInt(prompt("Ingrese el valor index de la entrada a eliminar"));
  if (i < arrayImportes.length) {
    var removed = arrayImportes.splice(i, 1);
    guardarTabla();
    console.table(arrayImportes);
    console.log("Entrada eliminada");
  } else {
    alert(error);
  }
};
//6.2 Editar entrada
const editarEntrada = () => {
  var j = parseInt(prompt("Ingrese el valor index de la entrada a editar"));

  const editarConcepto = () => {
    let nuevoConcepto = prompt("Introduzca el nuevo concepto");
    arrayImportes[j].Concepto = nuevoConcepto;
    guardarTabla();
    console.table(arrayImportes);
    console.log("Entrada modificada");
  };

  const editarCantidad = () => {
    let nuevaCantidad = parseFloat(prompt("Introduzca la nueva cantidad"));
    arrayImportes[j].Cantidad = nuevaCantidad;
    guardarTabla();
    console.table(arrayImportes);
    console.log("Entrada modificada");
  };
  // 6.2.1 menú editar entradas

  if (j < arrayImportes.length) {
    var cambiarValor = prompt(
      "¿Qué desea editar? \n 1-Concepto\n 2-Cantidad \n 3-Concepto y cantidad"
    );
    switch (parseInt(cambiarValor)) {
      case 1:
        editarConcepto();
        break;
      case 2:
        editarCantidad();
        break;
      case 3:
        editarConcepto();
        editarCantidad();
        break;
      default:
        alert(error);
        break;
    }
  } else {
    alert(error);
  }
};

// 6.3 menú elimar/editar
const modificarEntrada = () => {
  console.table(arrayImportes);
  let opcionEditar = prompt(
    "¿Qué desea hacer?: \n 1-Eliminar una entrada. \n 2-Editar una entrada."
  );
  switch (parseInt(opcionEditar)) {
    case 1:
      eliminaEntrada();
      break;
    case 2:
      editarEntrada();
      break;

    default:
      alert(error);
      break;
  }
};

// MENU PRINCIPAL
let consulta = prompt(
  "Elije una opción \n 1-Añadir un gasto. \n 2-Añadir un ingreso. \n 3-Listado de gastos. \n 4-Listado de ingresos. \n 5-Balance general \n 6-Modifcar o eliminar una entrada"
);
switch (parseInt(consulta)) {
  case 1:
    addImporte(arrayImportes, "Gasto");
    break;
  case 2:
    addImporte(arrayImportes, "Ingreso");
    break;
  case 3:
    tablaGastos(arrayImportes);
    break;
  case 4:
    tablaIngresos(arrayImportes);
    break;
  case 5:
    balanceFinal(arrayImportes);
    break;
  case 6:
    modificarEntrada();
    break;
  default:
    alert(error);
    break;
}
