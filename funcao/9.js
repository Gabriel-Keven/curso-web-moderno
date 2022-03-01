function classificacaoNotas(nota){
        let i = 0;
        if (nota % 5 > 2) {
            nota = nota + (5 - (nota % 5));
        }     
        if(nota>=40){
            return `Aprovado ${nota}`;
        }else{
            return `Reprovado ${nota}`;
        }
    
}
console.log(classificacaoNotas(37));
console.log(classificacaoNotas(40));
console.log(classificacaoNotas(90));
console.log(classificacaoNotas(61));


function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

