fatorial = function (valor){
    let numFatorial = 1;
    while(valor>0){
        numFatorial = numFatorial * valor;
        valor--;
    }
    return numFatorial;
}

console.log(fatorial(10));

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))