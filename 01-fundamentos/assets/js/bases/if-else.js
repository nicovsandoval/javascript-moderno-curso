let a = 2;

if ( a >= 10 ) { // undefine, null, una asignacion
    console.log('a es mayor o igual a 10');
} else {
    console.log( 'a es menor a 10');
}

// console.log ('fin del programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: domingo, 1: lunes, 2: martes...

console.log({dia}); 

if ( dia === 0 ) {
    console.log('Domingo');    
} else if (condition) {
    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if (dia === 2) {
    console.log('Martes')
} else {
    console.log('No es lunes, martes ni domingo')
}

// sin usar If else o Switch, unicamente objetos
dia = 6; // 0: domingo, 1: lunes, 2: martes...

const diaLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

const diaLetrasObj = {
    0:'Domingo',
    1:'Lunes',
    2:'Martes',
    3:'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado',
}

const diaLetrasObjFunc = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sabado - 6',
}

// dia de la semana
console.log( diaLetras[dia] || 'Dia no definido' );
console.log( diaLetrasObj[dia] || 'Dia no definido' );
console.log( diaLetrasObjFunc[dia]() || 'Dia no definido' );