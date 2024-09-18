
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark 5', 'Mark 1', 'Hierro'],
    direccion: {
        zip: '0000, 99233',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'infinity war'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);

console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords);
console.log('Latitud:', personaje.coords.lat);

console.log('N° Trajes:', personaje.trajes.length)
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length - 1])

let x = 'vivo';

console.log('Vivo:', personaje[x]);

console.log('Ultima Pelicula:', personaje['ultima-pelicula']);

// Mas detalles

// Eliminar una propiedad del objeto
delete personaje.edad;
console.log(personaje);

personaje.casados = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;
console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 100000000000;
personaje.casados = false;
personaje.direccion.ubicacion = 'Costa Rica'
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});
