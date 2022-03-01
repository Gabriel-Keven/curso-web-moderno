function calculaPrecoLanche(codigoDoLanche, quantidade){
    let valorTotal;
    switch(codigoDoLanche){
        case 100:
            return quantidade*3;
        break;
        case 200:
            return quantidade *4;
        break;
        case 300:
            return quantidade*5.5;
        break;
        case 400:
            return quantidade*7.5;
        break;
        case 500:
            return quantidade*3.5;
        break;
        case 600:
            return quantidade*2.80;
        break;
        default:
            return'Lanche não existe';
        break;
    }
}


console.log(calculaPrecoLanche(100, 2));
console.log(calculaPrecoLanche(200, 2));
console.log(calculaPrecoLanche(300, 2));
console.log(calculaPrecoLanche(400, 2));
console.log(calculaPrecoLanche(500, 2));
console.log(calculaPrecoLanche(600, 2));
console.log(calculaPrecoLanche(700, 2));
console.log('------------------------');
function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 2.8
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
