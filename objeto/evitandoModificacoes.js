//Objetct.preventExtensions
const produto = Object.preventExtensions({
    nome :'Qualquer', preco:1.99, tag: 'Promoção'
});
console.log('Extensível',Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

console.log('Extensível',Object.isExtensible(produto));

const pessoa = {nome: 'Juliana', idade:35};
Object.seal(pessoa);
console.log('Selado',Object.isSealed(pessoa));

pessoa.sobrenome ='Silva';
delete pessoa.nome;
pessoa.idade = 29;

console.log(pessoa);

//Objectfreeze = selado + valores constantes;
