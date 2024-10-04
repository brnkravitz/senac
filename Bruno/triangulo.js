let lado1 = parseInt(process.argv[2]);
let lado2 = parseInt(process.argv[3]);
let lado3 = parseInt(process.argv[4]);


if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
    console.log("Equilátero")
}else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
    console.log("Escaleno")
}else{
    console.log("Isóceles")
}
