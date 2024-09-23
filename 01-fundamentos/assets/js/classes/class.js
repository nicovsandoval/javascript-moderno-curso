
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancia';
    }

    static mensaje () {
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase' ) {

        this.nombre = nombre
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }

}


const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hola Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Hola Ironman');


// console.log(ironman);
// spiderman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// spiderman.nemesis = 'Duende Verde'; // Funciona

// console.log(spiderman);
// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);

