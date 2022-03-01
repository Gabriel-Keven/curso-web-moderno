function calculaMediaPonderada (codigo, nota1, nota2,nota3){
   let  newNota1, newNota2, newNota3;
let mediaPonderada = 0;    
    if(nota1>nota2 && nota1>nota3){
        newNota1 = nota1*4;
        newNota2 = nota2*3;
        newNota3 = nota3*3;
    }else if(nota2>nota1 && nota2>nota3){
        newNota1 = nota1*3;
        newNota2 = nota2*4;
        newNota3 = nota3*3;
    }else if(nota3>nota1 && nota3>nota2){
        newNota1 = nota1*3;
        newNota2 = nota2*3;
        newNota3 = nota3*4;
        
    }
    mediaPonderada = (newNota1+newNota2+newNota3)/10;
    if(mediaPonderada>=5){
        console.log(`APROVADO - Aluno ${codigo} - ${nota1}, ${nota2}, ${nota3} - Média = ${mediaPonderada}`);
    }else{
        console.log(`REPROVADO - Aluno ${codigo} - ${nota1}, ${nota2}, ${nota3} - Média = ${mediaPonderada}`);
    }
}
calculaMediaPonderada(123, 2.8, 6, 3.5)
//calculaMediaPonderada(123, 6.5, 1.3, 7.5)


function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal >=5 ? 'APROVADO':'REPROVADO'} - MÉDIA ${mediaFinal}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
//calcularNotaFinal(123, 6.5, 1.3, 7.5)