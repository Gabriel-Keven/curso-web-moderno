let dobro = function(a){
    return  2 * a;
}

dobro = (a) => {
    return 2 *a;
}

dobro = a => 2*a; //return está implícito

console.log(dobro(5));

let ola = function (){
    return 'Olá';
}
/**Outras sintaxes para a função arrow */
ola = () =>'Olá';
ola = _ =>'Olá';

console.log(ola());