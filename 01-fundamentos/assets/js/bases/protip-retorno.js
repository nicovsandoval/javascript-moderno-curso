
// function crearPersona(nombre, apellido) {
//     return {nombre, apellido}
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Nicolas', 'Viviescas');
console.log(persona);


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({edad, args});
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Nicolas', 'Hola');

console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Nicolas', 'Viviescas');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark 5', 'Mark 1', 'Hierro'],
};

// const imprimerPropiedades = (personaje) => {
//     console.log( 'nombre', personaje.nombre );
//     console.log( 'codeName', personaje.codeName );
//     console.log( 'vivo', personaje.vivo );
//     console.log( 'trajes', personaje.trajes );
// }

const imprimerPropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimerPropiedades(tony);


