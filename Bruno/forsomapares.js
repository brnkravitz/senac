let quantidade = parseInt(process.argv[2]);
let numero = 0;
let contador = 0;
let acumulador = 0;

while(contador < quantidade){
    numero = numero + 2;
    acumulador = acumulador + numero ;
    contador = contador + 1;
}

console.log("A soma dos " + quantidade + " primeiros número é " + acumulador);