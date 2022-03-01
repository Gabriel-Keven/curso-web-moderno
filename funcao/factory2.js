function criarProduto (nome, preco, desconto = 0.1){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('Lápis',1.5));
console.log(criarProduto('Ipad',1199.49));