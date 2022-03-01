let paresArray = function (){
    let i = 1;
    let par = [];
    for(i; i<=100;i++){
        (i%2 == 0)? par.push(i): '';    
    }
    return par;
}
console.log(paresArray())

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()