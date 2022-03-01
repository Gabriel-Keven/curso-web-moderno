const nome = 'Rebeca';
const concatecacao = 'Olá '+ nome + '!';

const tempale = `
    Olá
    ${nome}!`;
    console.log(concatecacao, tempale);

//expressoões...

console.log(`1 + 1 = ${1+1}`);

const up = texto =>texto.toUpperCase();
console.log(`Ei.... ${up('cuidado')}!`);