const vetorInteiro = [1, 2, 3, 4];
const vetorString = ['a', 'b', 'c', 'd'];
const vetorDouble = [1.1, 2.2, 3.3, 4.4];

function juntaVetores(vetor1, vetor2, vetor3){
    console.log(vetor1.concat(vetor2,vetor3));
}
function juntaVetores2(vetor1, vetor2, vetor3){
    console.log(vetor1.concat(vetor2).concat(vetor3));
}

juntaVetores(vetorInteiro,vetorString,vetorDouble);
juntaVetores2(vetorInteiro,vetorString,vetorDouble);

