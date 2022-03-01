const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']; //Não pode atribuir mais nada a const pilotos;
pilotos.pop(); //Remove o último elemento do array
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift();//Remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

//Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas','Massa');
console.log(pilotos);

//Remover
pilotos.splice(3,1)//massa quebreu;
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //Novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);