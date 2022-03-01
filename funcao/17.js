function calculaAumento(planoDeTrabalho, salario){
    let novoSalario;
    switch(planoDeTrabalho){
        case 'A':
            return novoSalario = salario + (salario*0.10);
        break;
        case 'B':
            return novoSalario = salario + (salario*0.15);
        break;
        case 'C':
            return novoSalario = salario + (salario*0.20);
        break;
        default:
            return 'Plano inválido.';
        break;
    }
}

console.log(calculaAumento('A', 1000));
console.log(calculaAumento('B', 1000));
console.log(calculaAumento('C', 1000));
console.log(calculaAumento('D', 1000));

function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
