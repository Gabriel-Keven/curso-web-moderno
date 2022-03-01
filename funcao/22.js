function anuidadeAssociacao(mes,valor){
    if(mes>=1 && mes<=12){
        atraso = mes - 1;
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    }else{
        return 'Mês inexistente';
    }
        }

       console.log(anuidadeAssociacao(4, 100))
       console.log(anuidadeAssociacao(13, 100))

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))