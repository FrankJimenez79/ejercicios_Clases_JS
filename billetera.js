/* BilleteraVirtual
Propiedades
monto
operaciones (array de objetos), inicializa vacío
Constructor
toma como argumento montoInicial y lo asigna a monto
Métodos
agregarGasto(gasto) agrega gasto a operaciones
agregarGanancia(ganancia) agrega ganancia a operaciones
obtenerGastosPorMes(mes) devuelve un array con todos los gastos hechos en mes
obtenerGanaciasPorMes(mes) devuelve un array con todas los ganancias obtenidas en mes
obtenerGastosPorCategoria(categoria) devuelve un array con todos los gastos de cierta categoria
obtenerGanaciasPorCategoria(categoria) devuelve un array con todas las ganancias de cierta categoria
calcularTotalPorMes(mes) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en un cierto mes
calcularTotalPorCategoria(categoria) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en cierta `categoria
**obtenerMonto()** devuelve monto
Observaciones
los objetos gasto y ganancia contiene las propiedades:
descripcion (string)
cantidad (número)
fecha (Date)
categoria (string)
cuando se agrega gasto o ganancia al array operaciones, hay que agregarle a dicha objeto la propiedad tipo con el valor "GASTO" o "GANANCIA" según corresponda, para poder identificarlos en las siguientes operaciones
cuando se devuelve un array con gastos o ganancias, hay que borrar de los objetos que se devuelven la propiedad tipo
cuando se calcula el total por mes o categoria, hay que tener en cuenta que los gastos restan y las ganancias suman al total */

class BilleteraVirtual {
  #monto;
  #operaciones;
  constructor(montoInicial) {
    this.#monto = montoInicial;
    this.#operaciones = [];
  }

  obtenerMonto() {
    return this.#monto;
  }

  agregarGasto(gasto) {
    const gastoConTipo = { ...gasto, tipo: "GASTO" };
    this.#monto -= gasto.cantidad;
    this.#operaciones.push(gastoConTipo);
  }

  agregarGanancia(ganancia) {
    const gananciaConTipo = { ...ganancia, tipo: "GANANCIA" };
    this.#monto += ganancia.cantidad;
    this.#operaciones.push(gananciaConTipo);
  }

  obtenerGastosPorMes(mes) {
    return this.#operaciones
      .filter((operacion) => {
        return operacion.tipo === "GASTO" && operacion.fecha.getMonth() === mes;
      })
      .map((operacion) => {
        const copia = { ...operacion };
        delete copia.tipo;
        return copia;
      });
  }

  obtenerGananciasPorMes(mes) {
    return this.#operaciones
      .filter((operacion) => {
        return (
          operacion.tipo === "GANANCIA" && operacion.fecha.getMonth() === mes
        );
      })
      .map((operacion) => {
        const copia = { ...operacion };
        delete copia.tipo;
        return copia;
      });
  }

  obtenerGastosPorCategoria(categoria) {
    return this.#operaciones
      .filter((operacion) => {
        return operacion.categoria === categoria && operacion.tipo === "GASTO";
      })
      .map((operacion) => {
        const copia = { ...operacion };
        delete copia.tipo;
        return copia;
      });
  }

  obtenerGananciasPorCategoria(categoria) {
    return this.#operaciones
      .filter((operacion) => {
        return (
          operacion.categoria === categoria && operacion.tipo === "GANANCIA"
        );
      })
      .map((operacion) => {
        const copia = { ...operacion };
        delete copia.tipo;
        return copia;
      });
  }

  calcularTotalPorMes(mes) {
    return this.#operaciones
      .filter((operacion) => {
        return operacion.fecha.getMonth() === mes;
      })
      .reduce((acumulador, operacion) => {
        if (operacion.tipo === "GASTO") {
          acumulador -= operacion.cantidad;
        } else {
          acumulador += operacion.cantidad;
        }
        return acumulador;
      }, 0);
  }

  calcularTotalPorCategoria(categoria) {
    return this.#operaciones
      .filter((operacion) => operacion.categoria === categoria)
      .reduce((acumulador, operacion) => {
        if (operacion.tipo === "GASTO") {
          return (acumulador -= operacion.cantidad);
        } else {
          return (acumulador += operacion.cantidad);
        }
      }, 0);
  }
}

const ganancia1 = {
  descripcion: "Limpiar casa",
  cantidad: 30,
  fecha: new Date(),
  categoria: "Limpieza",
};
const bT = new BilleteraVirtual(100);
console.log(bT.obtenerMonto());
const gasto1 = {
  descripcion: "Café",
  cantidad: 2,
  fecha: new Date(),
  categoria: "Comida",
};
bT.agregarGasto(gasto1);
console.log(bT);
bT.agregarGanancia(ganancia1);
console.log(bT);
console.log(bT.obtenerMonto());
console.log(bT.obtenerGastosPorMes(1));
const gasto2 = {
  descripcion: "Sandwich",
  cantidad: 15,
  fecha: new Date(),
  categoria: "Comida",
};
const ganancia2 = {
  descripcion: "Nomina",
  cantidad: 1300,
  fecha: new Date(),
  categoria: "Trabajo",
};
bT.agregarGasto(gasto2);
bT.agregarGanancia(ganancia2);
console.log(bT.calcularTotalPorMes(1));
console.log(bT.calcularTotalPorCategoria("Comida"));
