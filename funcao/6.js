function jurosSimples (ci, tj, ta){
    const jurosSimples = (ci*th*ta);
    return ci+jurosSimples;
}

function jurosCompostos(ci, tj, ta){
    let montante = ci*Math.pow((1+tj,ta));
    return montante;
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));



function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
