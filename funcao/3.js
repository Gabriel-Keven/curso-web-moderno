function calcula (base, expoente){
    return Math.pow(base, expoente);
}

console.log(calcula(2,3));
console.log(calcula(5,3));

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))