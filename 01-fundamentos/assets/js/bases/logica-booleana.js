const regresaTrue = () => {
    console.log('Regresa True');
    return true;
} 

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion')
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true

console.warn('And'); // devuelve tru si todos los valores son verdaderos
console.log( true && true ); //true
console.log( true && !false ); //true

console.log('============='); //si la primera condicion que se evalua es false no evalua las demas ya que la condicion no se cumple
console.log( regresaFalse() && regresaTrue() ); //false
console.log( regresaTrue() && regresaFalse() ); //false

console.log('=======&&=====');
// regresaTrue() && regresaFalse()
regresaFalse() && regresaTrue()
console.log('4 condiciones', true && true && true && false); // false

console.warn('Or'); // devuelve tru si al menis uno los valores son verdaderos
console.log( true || false ); //true
console.log( false || false ); //false

console.log('======||====='); // si la primera condicion que se evalua es true no evalua las demas ya que la condicion se cumple
console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false); // true

console.warn('Asignaciones');

const soyUndefine = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; //
const a2 = 'Hola' && 'Mundo' && soyFalso && true; //
const a3 = soyFalso || 'Ya no soy Falso';
const a4 = soyFalso || soyUndefine || soyNull || 'Ya no soy Falso de nuevo' || true;
const a5 = soyFalso || soyUndefine || regresaTrue() || 'Ya no soy Falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('hacer algo');
} else {
    console.log('Hacer otra cosa');
}

