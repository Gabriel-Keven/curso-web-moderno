calculaConvenioMedico = (idade) =>{
    let valorConvenioMedico = 100;
    if(idade<10){
        return valorConvenioMedico += 80;
    }else if(idade>=10 && idade<30){
        return valorConvenioMedico += 50;
    }else if(idade >=30 && idade<60){
        return valorConvenioMedico+= 95;
    }else if(idade>=60){
        return valorConvenioMedico+= 130;
    }else{
        return  'Idade inválida!';
    }
}

console.log(calculaConvenioMedico(8));
console.log(calculaConvenioMedico(15));
console.log(calculaConvenioMedico(35));
console.log(calculaConvenioMedico(52));
console.log(calculaConvenioMedico(80));
console.log('---------------')

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));