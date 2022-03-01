function exibeDia(dia){
    switch(dia){
        case 1:
            console.log('Domingo - Fim de Semana');
        break;
        case 2:
            console.log('Segunda - Dia útil');
        break;
        case 3:
            console.log('Terça - Dia útil');
        break;
        case 4:
            console.log('Quarta - Dia útil');
        break;
        case 5:
            console.log('Quinta - Dia útil');
        break;
        case 6:
            console.log('Sexta - Dia útil');
        break;
        case 7:
            console.log('Sábado - Fim de Semana');
        break;
        default:
            console.log('Dia inválido!');
        break;
    }
}

(exibeDia(1));
(exibeDia(2));
(exibeDia(3));
(exibeDia(4));
(exibeDia(5));
exibeDia(6);
exibeDia(7);
exibeDia('a');


function classificaDia(numero) {
    switch (numero) {
        case 1:
            return "Fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Fim de semana"
        default: 
            return "Dia inválido"
    }
}

console.log(classificaDia(1));
console.log(classificaDia(2));
console.log(classificaDia(3));
console.log(classificaDia(4));
console.log(classificaDia(5));
console.log(classificaDia(6));
console.log(classificaDia(7));
console.log(classificaDia('a'));

