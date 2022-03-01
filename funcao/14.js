const StringMaca = 'Maça';
const StringKiwi = 'Kiwi';
const StringMelancia = 'Melancia';

function verificaFruta(fruta){
    switch(fruta){
        case 'Maça':
            console.log('Não vendemos esta fruta aqui.');
        break;
        case 'Kiwi':
            console.log('Estamos como escassez de kiwis.');
        break;
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo');
        break;
        default: 
            console.log('Erro! Não vendemos ' +fruta + ' aqui.');
        break;
    }
}

verificaFruta(StringMaca);
verificaFruta(StringKiwi);
verificaFruta(StringMelancia);
verificaFruta('Feijão');

function venderFruta (fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')
