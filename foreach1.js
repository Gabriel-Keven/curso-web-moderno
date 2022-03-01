const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice, array,x){
    console.log(`${indice +1}) ${nome}`);
    console.log(x);
});
console.log('\n');

aprovados.forEach(nome => console.log(nome));

console.log('\n');
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);