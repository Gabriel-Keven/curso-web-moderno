function basquete(pontuacoes){
    let pontuacoesFinal = pontuacoes.split(", ");
    let contador = 0;
    let maiorPontuacao = pontuacoesFinal[0];
    let menorPontuacao = pontuacoesFinal[0];
    let menorPontuacaoIndice = 0;
    for(let i = 0; i<pontuacoesFinal.length;i++){
        if(pontuacoesFinal[i]>maiorPontuacao){
            maiorPontuacao =  pontuacoesFinal[i];
            contador++;
        }
        if(pontuacoesFinal[i]<menorPontuacao){
            menorPontuacao = pontuacoesFinal[i];
            menorPontuacaoIndice = i +1;
        }
    }

    console.log(`[${contador}, ${menorPontuacaoIndice}]`);

}
basquete("30, 40, 20, 4, 51, 25, 42, 38, 56, 0");



let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))