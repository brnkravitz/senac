let numero = parseInt(process.argv[2]);
let acumulador = 0;

for (let x = 0; x <= numero; x++){
    if(x % 2 === 0){
        acumulador = acumulador + x;
    }
}
console.log(acumulador)