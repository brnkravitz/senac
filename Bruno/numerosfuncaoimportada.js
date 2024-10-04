const leitor = require('prompt-sync')();
const biblioteca = require('./numerosfunction')

let quantidade


quantidade = parseInt(leitor('Digite um número: '));

biblioteca.imprimirNumeros(quantidade);