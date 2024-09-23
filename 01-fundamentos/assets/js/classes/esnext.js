
class Rectangulo {

    // private fields
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura

        this.#area = base * altura;
    }

    // private method
    #privateCalcularArea () {
        console.log(this.#area * 2);
    }

    publicCalcularArea() {
        return this.#privateCalcularArea();
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;

rectangulo.publicCalcularArea();

console.log(rectangulo);

