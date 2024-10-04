let quantidade = parseInt(process.argv[2]);
let numero = 1;

while(numero <= quantidade){
    process.stdout.write(numero + ' ');
    numero = numero +1;
}