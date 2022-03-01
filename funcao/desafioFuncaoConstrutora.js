function Pessoa(nome) {
    this.nome = nome;
    
    this.falar = function (){
        console.log(`Hoje tem gol do ${this.nome}!!`);
    }
}

const p1 = new Pessoa('Ribamar');
p1.falar();
