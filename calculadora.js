/* Calculadora
Propiedades
resultado (número), inicializa en 0
Métodos
sumar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
restar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
multiplicar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
dividir(numero): divide resultado por numero, y actualiza resultado con el valor de dicha operación
obtenerResultado(): devuelve resultado
reiniciar(): pone resultado en 0
Observaciones
arrojar un error cuando el argumento ingresado no sea un número, con Number.isFinite()
arrojar un error cuando se intenta dividir por 0 */

class Calculadora {
  #resultado = 0;

  sumar(numero) {
    if (!Number.isFinite(numero)) {
      throw new Error(`No has introducido un numero valido`);
    }
    this.#resultado += numero;
  }

  restar(numero) {
    if (!Number.isFinite(numero)) {
      throw new Error(`No has introducido un numero valido`);
    }
    this.#resultado -= numero;
  }

  multiplicar(numero) {
    if (!Number.isFinite(numero)) {
      throw new Error(`No has introducido un numero valido`);
    }
    this.#resultado *= numero;
  }

  dividir(numero) {
    if (!Number.isFinite(numero) || numero === 0) {
      throw new Error(
        `No has introducido un numero valido o estas dividiendo por 0`,
      );
    }
    this.#resultado /= numero;
  }

  obtenerResultado() {
    return this.#resultado;
  }

  reiniciar() {
    this.#resultado = 0;
  }
}

const c = new Calculadora();
console.log(c.obtenerResultado());
c.sumar(5);
console.log(c.obtenerResultado());
try {
  c.restar("hola");
} catch (error) {
  console.log(error.message);
}
console.log(c.obtenerResultado());
c.multiplicar(3);
console.log(c.obtenerResultado());
c.restar(2);
try {
  c.dividir(0);
} catch (error) {
  console.log(error.message);
}
