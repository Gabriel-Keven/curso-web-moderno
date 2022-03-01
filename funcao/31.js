const qtdInteirosNegativos = vetor =>{
    let contador = 0;
    for(let i in vetor){
        if(vetor[i]<0){
            contador++;
        }
    }
    return contador;
}

console.log(qtdInteirosNegativos( [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]));


function numerosNegativos (vetor) {
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))