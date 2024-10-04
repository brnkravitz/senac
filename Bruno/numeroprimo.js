let numero = parseInt(process.argv[2]);
let ehPrimo = true;
for(let x = 2; x < numero; x++) {
    if (numero % x === 0) {
        ehPrimo = false;
    }
}

if (ehPrimo) {
    console.log("O número " + numero + " é primo")
}else{
    console.log("O número " + numero + " não é primo")
}