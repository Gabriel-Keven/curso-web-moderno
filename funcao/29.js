function calculaQuantidadeIntervalo(vetor){
    let qtdIntervalo = 0;
    for (let i in vetor){
        if(vetor[i] >=10 && vetor[i]<=20){
            qtdIntervalo++;
        }
    }
    console.log(`Quantidade de números presentes no intervalo: ${qtdIntervalo}`);

}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
calculaQuantidadeIntervalo(vetor);

function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))