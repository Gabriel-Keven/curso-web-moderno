function pa(n, a1, r){
    let soma = 0;
    for(let i = 0; i<n;i++){
        console.log(a1 + r*i); 
        soma += a1 +r*i;
    }
    console.log('Soma = '+ soma);
}
pa(3,1,2);
console.log('------------------------------------------');
pa(10,10,15);
console.log('-----------------------------------------');
function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}
//pA(3, 1, 2)
pA(10, 10, 15)

function pg(n, a1, r){
    let soma = 0;
    for(let i = 0; i<n;i++){
        console.log(a1 * (r**i)); 
        soma += a1 *(r**i);
    }
    console.log('Soma = '+ soma);
}
pg(10, 5, 3);

console.log('---------------PG-------------');
function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}
pG(10, 5, 3)