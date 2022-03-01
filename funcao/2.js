const triangulo = (v1,v2,v3)=>{
    if(v1==v2 && v2==v3){
         return 'Equilátero';
    }else if(v1!=v2 && v2!=v3 && v1!=v3){
        return 'Escaleno';
    }else{
        return 'Isóceles';
    }
}

console.log(triangulo(1,2,3));
console.log(triangulo(2,2,3));
console.log(triangulo(3,3,3));


function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

