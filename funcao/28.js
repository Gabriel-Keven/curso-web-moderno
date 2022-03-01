function calculaImparEPar(vetor){
    let qtdPar = 0, qtdImpar = 0;
    for (let i in vetor){
        if(vetor[i] % 2 == 0){
            qtdPar++;
        }else{
            qtdImpar++;
        }
    }
    console.log(`Quantidade de números pares: ${qtdPar} - Quantidade de números ímpares: ${qtdImpar}`);

}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
calculaImparEPar(vetor)

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)