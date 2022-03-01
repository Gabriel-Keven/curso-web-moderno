const divisivelPor3 = (valor) =>
{
    if(valor%3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(divisivelPor3(3));
console.log(divisivelPor3(2));
console.log(divisivelPor3(150));

function verificaNumero (numero) {
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaNumero(3))
console.log(verificaNumero(2))
console.log(verificaNumero(150))
