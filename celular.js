/* Celular
Propiedades
contactos (array de objetos), inicializa vacío
llamadas (array de strings), inicializa vacío
Métodos
agregarContacto(contacto) agrega contacto a contactos
buscarPorNombre(nombre) devuelve el contacto con dicho nombre en el array contactos o undefined si no lo encuentra
buscarPorNumero(numero) devuelve el contacto con dicho número en el array contactos o undefined si no lo encuentra
eliminarContacto(nombre)elimina el contacto con nombrenombredecontactos`
llamar(nombre) si existe un contacto con nombre nombre en la lista contactos, agrega a llamadas un string que representa un registro de la misma, usando la plantilla `Llamada a ${nombre} con número ${numero} realizada
verContactos() devuelve un string listando todos los contactos, con sus nombres y números
verHistorial() devuelve un string con la lista de llamadas realizadas
Observaciones
contacto es un objeto con las propiedades nombre y numero
no se puede agregar un contacto si ya existe en el celular alguno con el mismo nombre o número */

class Celular {
  #contactos;
  #llamadas;
  constructor() {
    this.#contactos = [];
    this.#llamadas = [];
  }

  agregarContacto(contacto) {
    const existe = this.#contactos.find((elemento) => {
      return (
        elemento.nombre === contacto.nombre ||
        elemento.numero === contacto.numero
      );
    });
    if (!existe) {
      this.#contactos.push(contacto);
    } else {
      return false;
    }
  }

  buscarPorNombre(nombre) {
    const existeNombre = this.#contactos.find(
      (elemento) => elemento.nombre === nombre,
    );
    return existeNombre;
  }

  buscarPorNumero(numero) {
    return this.#contactos.find((elemento) => elemento.numero === numero);
  }

  llamar(nombre) {
    const contacto = this.#contactos.find(
      (elemento) => elemento.nombre === nombre,
    );
    if (!contacto) return false;
    this.#llamadas.push(
      `Llamada a ${contacto.nombre} con numero ${contacto.numero} realizaada`,
    );
    return [...this.#llamadas];
  }

  verContactos() {
    return this.#contactos
      .map((contacto) => `${contacto.nombre}: ${contacto.numero} `)
      .join("\n");
  }

  verHistorial() {
    return this.#llamadas.map((llamada) => `${llamada}`).join("\n");
  }
}
const c = new Celular();

console.log(c);
c.agregarContacto({ nombre: "Juan", numero: "123456789" });
c.agregarContacto({ nombre: "Frank", numero: "234567328" });
console.log(c);
console.log(c.buscarPorNombre("Juan"));
console.log(c.buscarPorNumero("123456789"));
console.log(c.llamar("Frank"));
console.log(c.verContactos());
console.log(c.verHistorial());
