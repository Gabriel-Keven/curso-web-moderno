/**Armazenando uma função em uma variável */
const imprimirSoma = function(a,b){
     console.log(a+b);

}

imprimirSoma(10,2);

//Armazenando um função arrow em uma variável;
const soma = (a,b) =>{
    return a+b;
}
console.log(soma(2,9));

//Retorno implícito
const subrtracao = (a,b) => a - b;

console.log(subrtracao(15,5));

const imprime2 = a => console.log(a);

imprime2("Funec");