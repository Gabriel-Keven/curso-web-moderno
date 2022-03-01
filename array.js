//Estrutura heterogênea, flexível -> não precisa definir o tamanho do array.
console.log(typeof Array, typeof new Array, typeof []);
let aprovados = new Array('Bia', 'Carlos','Ana');
console.log(aprovados)

aprovados = ['Neneca', 'Carlos','Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
/*retorna undefined*/
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
console.log(aprovados[3]);
aprovados.push('Ronaldinho');
console.log(aprovados.length);

aprovados[9] ='Rafael';
console.log(aprovados);

console.log(aprovados[8] === undefined);

aprovados.sort(); //Ordenar o Array
console.log(aprovados)

delete aprovados[1]; //Não vai reordenar o array
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Pedro','Marquin','Martinez'];
aprovados.splice(1,1); //Metódo versátil -> indíce, quantidade de elementos que se deseja excluir a partir do índice informado 
console.log(aprovados);


//No JS o array é um objeto.
