const nic = {
    nombre: 'Nicolas',
    edad: 27,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// nic.imprimir();

function Persona(nombre, edad) {
    console.log('se ejecuto esta funcion');

    this.nombre = nombre;
    this.edad = edad;
    
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 21);
const melissa = new Persona('Melissa', 18);
// console.log(maria);
maria.imprimir();
melissa.imprimir();
