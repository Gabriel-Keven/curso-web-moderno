//Variáveis criadas com 'var' são acessadas globalmente, com exceção quando elas são criadas dentro de uma função.
{ 
    { 
        { 
            { 
                var sera = 'Será??'; 
            } 
        }
     } 
}
console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}

teste();
//console.log(local); //Erro!