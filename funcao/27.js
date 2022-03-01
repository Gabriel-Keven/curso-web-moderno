function altura(altura1, taxa1, altura2, taxa2){
    let tempo = 0;
    if(altura1>altura2){
        if(taxa1>=taxa2){
            console.log(`A criança 2 não utltrapassará a criança 1.`)
        }else{
        while(altura2<=altura1){
            altura2 += taxa2;
            altura1 += taxa1;
            tempo++;
        }
        console.log(`A criança 2 utlrapassará a criança 1 em ${tempo} anos.`)
    }
    }else if(altura2>altura1){
        if(taxa2>=taxa1){
            console.log(`A criança 1 não utltrapassará a criança 2.`)
        }else
        { 
            while(altura1<=altura2){
                altura2 += taxa2;
                altura1 += taxa1;
                tempo++;
                
            }
            console.log(`A criança 1 utltrapassará a criança 2 em ${tempo} anos.`)
        }
    }else if(altura1 == altura2){
        if (taxa1 > taxa2) {
            console.log('A criança 1 ultrapassará a criança 2 em 1 ano.');
        } else if(taxa1 < taxa2) {
            console.log('A criança 2 ultrapassará a criança 1 em 1 ano.');
        }else{
            console.log('As crianças tem igual altura e crescimento.');
        }
    }
}  

altura(150, 2, 130, 4);
altura(140, 1, 130, 10);

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));
console.log(calcularCrescimento(140, 1, 130, 10));