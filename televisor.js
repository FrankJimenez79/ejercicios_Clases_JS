/* Televisor
Propiedades

encendido (booleano), inicializa en false
canal (número), inicializa en 0
canales (número)
volumen (número), inicializa en 0
marca (string)
Constructor

pide como argumentos marca y canales y los asigna a sus respectivas propiedades
Métodos

prender() pone encendido en true
apagar() pone encendido en false
verCanalSiguiente() suma 1 a canal y actualiza dicha propiedad
verCanalAnterior() resta 1 a canal y actualiza dicha propiedad
cambiarCanal(canal) actualiza la propiedad canal con el valor del parámetro canal
subirVolumen() suma 1 a volumen y actualiza dicha propiedad
bajarVolumen() resta 1 a volumen y actualiza dicha propiedad
toString() devuelve un string como el siguiente ejemplo:

Televisor Samsung
- Canales: 100
- Canal actual: 23
- Volumen actual: 34
Observaciones

solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
canales representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
solo se puede cambiar a un canal que exista
el volumen mínimo es 0 y el máximo 100 */

class Televisor {
  #encendido = false;
  #canal = 0;
  #canales;
  #volumen = 0;
  #marca;
  constructor(marca, canales) {
    this.#marca = marca;
    this.#canales = canales;
  }

  prender() {
    this.#encendido = true;
  }

  apagar() {
    this.#encendido = false;
  }

  verCanalSiguiente() {
    if (!this.#encendido) return false;
    if (this.#canal === this.#canales) {
      this.#canal = 0;
    } else {
      this.#canal += 1;
    }
  }

  verCanalAnterior() {
    if (!this.#encendido) return false;
    if (this.#canal === 0) {
      this.#canal = this.#canales;
    } else {
      this.#canal -= 1;
    }
  }

  cambiarCanal(canal) {
    if (!this.#encendido) return false;
    if (canal < 0 || canal > this.#canales) return false;
    this.#canal = canal;
  }

  subirVolumen() {
    if (!this.#encendido) return false;
    if (this.#volumen === 100) return false;
    this.#volumen += 1;
  }

  bajarVolumen() {
    if (!this.#encendido) return false;
    if (this.#volumen === 0) return false;
    this.#volumen -= 1;
  }

  toString() {
    return `Televisor ${this.#marca}:\n - Canales: ${this.#canales}\n - Canal actual: ${this.#canal}\n - Volumen actual: ${this.#volumen}`;
  }
}

const t = new Televisor("Samsung", 25);
console.log(t.toString());
