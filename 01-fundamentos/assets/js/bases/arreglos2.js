
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('largo:', juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo})

// Recorre todos los elementos del arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

// Agrega un nuevo elemento al final del arreglo y devuelve la nueva longitud
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// Agrega un nuevo elemento al arreglo en la posicion 0 y devuelve la nueva longitud
nuevaLongitud = juegos.unshift('Contra');
console.log({nuevaLongitud, juegos});

// Elimina el ultimo elemento del arreglo y lo devuelve
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//
let pos = 1;
console.log(juegos)
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos})

//Devuelve el indice del elemento encontrado en el arreglo
let metroidIndex = juegos.indexOf('Metroid'); //Es Case Sensitive
console.log(metroidIndex);