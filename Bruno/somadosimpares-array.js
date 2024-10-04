const leitor = require('prompt-sync')();

let valores = [];
let numero;


do{
    let valor = leitor ('Digite a idade dos alunos: ');
    numero = parseInt (valor);
    if(numero >= 0) {npm 
        valores.push(numero);
    }
    
}while (numero !== -1);

console.log(valores);


let acumulador = 0;

for(let i = 0; i < valores.length; i++){
    if(valores[i] % 2 !== 0)
    acumulador += valores[i];
}

console.log("Soma dos números impares: " + acumulador)