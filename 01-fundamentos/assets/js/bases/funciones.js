
function saludar( nombre ) {
    // console.log( arguments )
    // console.log('Hola ' + nombre);
    return [10,1];

    // Esto nuca se va a ejecutar
    console.log('Soy un codigo despues del return')
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre)
}

const retornoSaludar = saludar( 'Nicolas', 40, true, 'Colombia' );
console.log(retornoSaludar[0], retornoSaludar[1]);

// saludar2( 'Nicolas' );
// saludarFlecha();
// saludarFlecha2('Andres');

function sumar(a, b) {
    return a + b;
}

// const sumarDos = (a,b) => {
//     return a + b;
// }

const sumarDos = ( a, b ) => a + b;

function getAleatorio() {
    return Math.random();    
}

// GetAleatorio en funcion de flecha que no tenga  llaves {}
// getAleatorio2

const getAleatorio2 = () => Math.random();


console.log(getAleatorio2());

