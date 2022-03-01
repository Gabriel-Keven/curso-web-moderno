//Função é um bloco de código nomeado. É um trecho de código que pode ser chamado inúmeras vezes no código.
//A função pode receber ou não parâmetros de entrada.

/**Função sem retorno */
function imprimirSoma(a,b){
    console.log(a+b);
}

imprimirSoma(3,1);
imprimirSoma(2);
imprimirSoma(2,13,4,5,3,7,8);
imprimirSoma();

/**Função com retorno */

function soma(a,b = 1){
    return a+b;
}

console.log(soma(2,8));
console.log(soma(5));
console.log(soma());

