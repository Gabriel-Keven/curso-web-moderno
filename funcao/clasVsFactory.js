class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    
    falar(){
        console.log(`Hoje tem gol do ${this.nome}!!`);
    }
}

const p1 = new Pessoa('Ribamar');
p1.falar();

const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Keven');
p2.falar();