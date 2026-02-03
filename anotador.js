/* Anotador
Propiedades

titulo (string)
notas (array de strings), inicializa vacío
Constructor

pide como argumento titulo y lo asigna a sus respectiva propiedad
Método

agregarNota(nota) agrega nota al array de notas
actualizarNota(id, nota) actualiza el ítem con índice id, reemplazándolo por nota
obtenerNota(id) devuelve el ítem del array notas con índice id
eliminarNota(id) elimina de notas el ítem con índice id
eliminarNotas() borra todos los ítems de notas
listarNotas() devuelve un string con todas las notas y sus respectivos ids, por ejemplo

Cosas para hacer
------------------------
1. Ir al súper
2. Ver serie
3. Programar
4. Leer libro */

class Anotador {
  #titulo;
  #notas;
  constructor(titulo) {
    this.#titulo = titulo;
    this.#notas = [];
  }

  agregarNota(nota) {
    this.#notas.push(nota);
  }

  actualizarNota(id, nota) {
    if (id < 0 || id >= this.#notas.length) return false;
    this.#notas[id] = nota;
  }
  obtenerNota(id) {
    return this.#notas[id];
  }

  eliminarNota(id) {
    this.#notas.splice(id, 1);
  }

  eliminarNotas() {
    this.#notas = [];
  }

  listarNotas() {
    let resultado = `${this.#titulo} \n --------------- \n`;
    this.#notas.forEach((nota, index) => {
      resultado += `${index + 1}: ${nota}\n`;
    });
    return resultado;
  }
}

const a = new Anotador(`Lista de la compra`);
console.log(a);
a.agregarNota(`Leche`);
a.agregarNota(`Queso batido`);
console.log(a);
a.actualizarNota(0, "Leche desnatada");
console.log(a);
console.log(a.obtenerNota(1));
a.eliminarNota(1);
console.log(a);
a.eliminarNotas();
console.log(a);
a.agregarNota(`Leche`);
a.agregarNota(`Queso batido`);
a.agregarNota(`Aguacate`);
a.agregarNota(`Limones`);
console.log(a.listarNotas());
