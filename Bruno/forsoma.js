let quantidade = parseInt(process.argv[2]);
let numero = 0;
let acumulador = 0;

while(numero < quantidade){
    numero = numero + 1;
    acumulador = acumulador + numero;
}

console.log("A soma dos " + quantidade + " primeiros número é " + acumulador);