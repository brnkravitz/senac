const leitor = require('prompt-sync')();

let valores = [];
let numero;


do{
    let valor = leitor ('Digite a idade dos alunos: ');
    numero = parseInt (valor);
    if(numero >= 0) {
        valores.push(numero);
    }
    
}while (numero !== -1);

console.log(valores);



let media = valores.length;
let acumulador = 0;

for(let i = 0; i < valores.length; i++){
    acumulador += valores[i];
}

media = acumulador / valores.length;

console.log("Média: " + media)