let numero = parseInt(process.argv[2]);
let numerosNaLinha = 1;
let numerosQueJaImprimiNaLinha = 0;
for(let x = 1; x <= numero; x++){
    if (numerosQueJaImprimiNaLinha === numerosNaLinha){
        console.log();
        numerosNaLinha ++;
        numerosQueJaImprimiNaLinha = 0;
    }
    numerosQueJaImprimiNaLinha++;
    process.stdout.write(x + " ");
}