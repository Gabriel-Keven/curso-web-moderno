function trocaVetor(vetor1, vetor2){
    if(vetor1.length != vetor2.length){return false}
    for(let i = 0; i<vetor1.length;i++){
    [vetor1[i],vetor2[i]] = [vetor2[i],vetor1[i]];
    
    }
    console.log(vetor1);
    console.log(vetor2);
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaVetor(vetorA, vetorB)

trocaVetor([1,10,100],[2,20,200]);

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

vetorA = [1, 2, 3]
vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)