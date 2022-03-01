const valor = function(num){
    let num1 = num.toFixed(2);
    return num1.replace('.',',');

};

console.log(`R$ ${valor(0.1 +0.2)}`);


function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)