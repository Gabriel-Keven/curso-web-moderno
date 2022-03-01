function calculaMediaVetor(vetor){
    let media = 0;
    let soma = 0;
    for(let i in vetor){
        soma = soma + vetor[i];
       
    }
    media = soma/(vetor.length);
    
    return media;
}

console.log(calculaMediaVetor([1,2,3,4,5]));


function mediaVetor (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))