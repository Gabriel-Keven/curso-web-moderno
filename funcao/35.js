const vetorPilha = [1,2,3,4,5];
const vetorAdiciona = [6,7,8,9];

function addVetor(vetor1, vetor2){
    for(let i in vetor2){
        vetor1.push(vetor2[i]);
    }
   for(let i in vetor1){
       console.log(vetor1[i]);
   }
}
addVetor(vetorPilha,vetorAdiciona);



