const leitor = require('prompt-sync')();
let numero, quadrado;

// function calcularQuadrado(num) {
const calcularQuadrado = (num) => {
    let q = num ** 2;
    return q;
}

numero = parseInt(leitor('Digite o número: '));

quadrado = calcularQuadrado(numero);

console.log(quadrado);