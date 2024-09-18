
const carros = ['Ford', 'Mazda', 'Honda','Toyota'];

let i = 0;

// while ( i < carros.length ) {
//    console.log(carros[i]);
//    i++;
// }

console.warn('While')
// undefined
// null
// false

// console.log( carros[10] );

while ( carros[i] ) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
 }

console.warn('Do While'); // siempre se va a ejecutar el bloque de la instruccion al menos una vez asi no se cumpla la condicion.
let j = 0;

do {
    console.log(carros[j]);
    j++;
} while (carros[j]);

