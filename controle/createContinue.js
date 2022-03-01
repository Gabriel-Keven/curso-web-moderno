const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x in nums){
    if(x == 5){ 
        break;//Desvio de fluxo para fora do lanço corrente
    }
    console.log(`índice ${x} = ${nums[x]}`);
}
console.log('------------------------------------------');
for(let y in nums){
    if(y==5){
        continue;//Interrompe o laço de repetição e continua a sequência no laço.
    }
    console.log(`índice ${y} = ${nums[y]}`);
}
console.log('------------------------------------------');


externo:
for(a in nums){
    for(b in nums){
        if(a==2 && b==3) break externo; //Break está vinculado ao for mais externo.
        console.log(`Par = ${a}, ${b}`);
    }
}

console.log('Fim!');
