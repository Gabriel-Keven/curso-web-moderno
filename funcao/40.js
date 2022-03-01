function atribuiConceito(vetor){
    for(let i in vetor){
        if(vetor[i]<0 || vetor[i]>10){
            console.log('Nota inválida!');
        }else if(vetor[i]<4.9){
            console.log('D');
        }else if(vetor[i]>=5 && vetor[i]<7){
            console.log('C');
        }else if(vetor[i]>=7 && vetor[i]<9){
            console.log('B');
        }else if(vetor[i]>=9){
            console.log('A');
        }
    }
}
let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
atribuiConceito(notas);
console.log('==========================||=======================');


function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)