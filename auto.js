/* Auto
Propiedades
encendido (booleano), inicializa en false
velocidad (número), inicializa en 0
marca (string)
modelo (número)
patente (string)
Constructor
pide como argumentos marca, modelo, patente y los asigna a sus respectivas propiedades
Métodos
arrancar() pone encendido en true
apagar() pone encendido en false
acelerar() suma 10 a velocidad y actualiza dicha propiedad
desacelerar() resta 10 a velocidad y actualiza dicha propiedad
toString() devuelve un string con la siguiente plantilla ${marca} ${modelo}, patente ${patente}
Observaciones
sólo se puede acelerar o desacelerar si el auto se encuentra prendido
sólo se puede apagar el auto si la velocidad es 0
la velocidad mínima es 0 */

class Auto {
  #encendido = false;
  #velocidad = 0;
  #marca;
  #modelo;
  #patente;
  constructor(marca, modelo, patente) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#patente = patente;
  }

  arrancar() {
    this.#encendido = true;
  }

  apagar() {
    if (this.#velocidad > 0) return false;
    this.#encendido = false;
  }

  acelerar() {
    if (!this.#encendido) return false;
    this.#velocidad += 10;
  }
  desacelerar() {
    if (this.#velocidad < 10 || this.#encendido === false) return false;
    this.#velocidad -= 10;
  }

  toString() {
    return `Auto: ${this.#marca}, ${this.#modelo}, ${this.#patente}`;
  }
}

const a = new Auto("Peugeot", "206", "ABC");
console.log(a.toString());
a.acelerar();
a.desacelerar();
a.arrancar();
a.acelerar();
a.apagar();
a.desacelerar();
a.desacelerar();
