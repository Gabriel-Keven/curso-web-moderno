calculadora = (num1, operacao, num2) =>{
    switch(operacao){
    case '+':
            return num1 + num2;
        break;
        case '-':
            return num1 - num2;
        break;
        case '*':
            return num1 * num2;
        break;
        case '/':
            return num1 / num2;
        break;
        default:
            return 'Operação inválida!';
        break;
    }
}

console.log(calculadora(2,'+',3));
console.log(calculadora(2,'-',3));
console.log(calculadora(2,'*',3));
console.log(calculadora(2,'/',3));
console.log(calculadora(2,'+/',3));

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));
