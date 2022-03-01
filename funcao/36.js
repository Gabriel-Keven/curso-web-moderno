let vetor = [1,2,3,4,5];

const vetorMultiplicado = (parametro,vetor) =>{
    return vetor.map(function(item){
        return item * parametro;
    })
    
}
console.log(vetorMultiplicado(3,vetor));

const vetorMultiplicadoMaiorQue5 = (parametro,vetor) =>{
    const v = vetor.map(function(item){
        return item * parametro;
    });

    for(let i in v){
        if(v[i]<5){
            console.log('False');
            break;
        }else{
            console.log(v[i]); 
        }
    }
               
}
vetorMultiplicadoMaiorQue5(5,vetor);


let vetor1 = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor1, 3))
