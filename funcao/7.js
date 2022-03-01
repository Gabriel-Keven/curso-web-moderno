function calculaEquacaoSegundoGrau(ax2, bx, c){
    const delta = (bx**2) - 4*ax2*c;
    const resultado = [];
    if(delta<0){
        return 'Delta é nagtivo';
    }else{
        resultado[0] = (-bx + Math.sqrt(delta))/2*ax2;
        resultado[1] = (-bx - Math.sqrt(delta))/2*ax2;
        return resultado;
    }
}

console.log(calculaEquacaoSegundoGrau(1, 3, 2));
console.log(calculaEquacaoSegundoGrau(3, 1, 2));

function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
