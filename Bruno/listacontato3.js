const leitor = require('prompt-sync')();

let quantidade = parseInt(
    leitor(
        "Quantos contatos deseja cadastrar? "
    )
);

let contatos = [];

for(let i = 0; i < quantidade; i++){
    console.log('\n\ncontato #' + (i+1));
    let n = leitor("Nome: ");
    let e = leitor("E-mail: ");
    let t = leitor("Telefone: ");
    let contato = {
        nome: n,
        email: e,
        telefone: t
    };
    contatos.push(contato);
}

console.log(contatos);

for (let i = 0; i < quantidade; i++){
    let pessoa = contatos[i];
    let idade = parseInt(
        leitor("Informe a idade de " + pessoa.nome + " : ")
    );
    pessoa.idade = idade;
}

console.log(contatos);

let media, acumulador = 0;

for(let i =0; i < quantidade; i++){
    let pessoa = contatos[i];
    acumulador += pessoa.idade;
}
media = acumulador / contatos.length;

console.log("Média de idade: " + media);

let menorIdade = 18;

for(let i = 0; i < quantidade; i++){
    let pessoa = contatos[i];
    if(pessoa.idade < menorIdade){
        console.log(pessoa.nome + " é menor de idade.")
    }
}


