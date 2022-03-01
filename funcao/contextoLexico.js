const valor  = 'Global';

function minhaFuncao(){//O valor será referente onde a função foi criada e não executada
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao();
}

exec();