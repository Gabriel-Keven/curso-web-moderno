//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'; //Não faça isso!!
const avo = {
    attr1: 'A'
};
const pai = {
    __proto__: avo,
    attr2: 'B'
};

const filho = {
    __proto__: pai,
    attr3: 'C'
};
console.log(filho.attr0);
console.log(filho.attr1);
console.log(filho.attr2);
console.log(filho.attr3);


const carro = {
    valAtual : 0,
    velMax : 200,
    acelerar(delta){
        if(this.valAtual + delta <= this.velMax){
            this.velMax += delta;
        }
        else{
            this.valAtual = this.velMax;
        }

    },
    status(){
        return `${this.valAtual}km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo :'F40',
    velMax : 324 //shadowing
};

const volvo = {
    modelo: 'V40',
    status (){
        return `${this.modelo}: ${super.status}`;
    }
}

Object.setPrototypeOf(ferrari, carro); //Ferrari tem carro como seu propósito

Object.setPrototypeOf(volvo, carro); //Volvo tem carro como seu propósito

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(100);
console.log(ferrari.status());
