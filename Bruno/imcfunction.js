const leitor = require('prompt-sync')();
let peso, altura, resultado;


// function calcularImc(p, a) {
const calcularImc = (p, a) => {
    let imc = p / a ** 2;
    return imc;
}

peso = parseFloat(leitor('Digite o peso: '));
altura = parseFloat(leitor('Digite a altura: '));

resultado = calcularImc(peso, altura);

console.log('IMC: ' + resultado);