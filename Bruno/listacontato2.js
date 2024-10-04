let contato = {
    nome: "",
    telefone:0,
    email: ""
};
const leitor = require ('prompt-sync')();
contato.nome = leitor('Digite seu nome: ');
contato.telefone = leitor('Digite seu telefone: ');
contato.email = leitor('Digite seu e-mail: ');
console.log("Nome: " + contato.nome + "\n" + "Telefone: " + contato.telefone + "\n" + "E-mail: " + contato.email)