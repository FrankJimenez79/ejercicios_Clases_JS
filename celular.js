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
}

const c = new Celular();

console.log(c);
