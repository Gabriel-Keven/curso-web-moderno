// const prod1 = {
//     nome : '---',
//     preco : 45
// };

// const prd2 = {
//     nome: '---',
//     preco: 1234
// }

//Facory simples

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa());