function calculaQuantidadeNotas(valor){
    let valorFinal ='';
    let nota100;
    let nota50;
    let nota10;
    let nota5;
    let nota1;

    if(Math.floor(valor/100) > 0) {
        nota100 = Math.floor(valor/100);
        valor = valor%100;
        valorFinal += `${nota100} nota(s) de R$100. `;
    }
    if(Math.floor(valor/50) > 0){
        nota50 = Math.floor(valor/50);
        valor = valor%50;
        valorFinal += `${nota50} nota(s) de R$50. `;
    }
    if(Math.floor(valor/10) > 0){
        nota10 = Math.floor(valor/10);
        valor = valor%10;
        valorFinal += `${nota10} nota(s) de R$10. `;
    }
    if(Math.floor(valor/5) > 0){
        nota5 = Math.floor(valor/5);
        valor = valor%5;
        valorFinal += `${nota5} nota(s) de R$5. `;
    }
    if(Math.floor(valor/1) > 0){
        nota1 = Math.floor(valor/1);
        valor = valor%1;
        valorFinal += `${nota1} nota(s) de R$1. `;
    }

    console.log(valorFinal);
}

calculaQuantidadeNotas(153);
calculaQuantidadeNotas(58);
calculaQuantidadeNotas(358);
calculaQuantidadeNotas(13);
calculaQuantidadeNotas(18);


function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));
