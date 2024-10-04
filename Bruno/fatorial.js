let x = parseInt(process.argv[2]);
let acumulador = 1;

for(let i = x; i > 0 ; i--){
    acumulador *= i

}
console.log(acumulador)