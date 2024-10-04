const leitor = require('prompt-sync')();
const biblioteca = require('./agendacontatosimportada');
let numero, contatos = [];

do {
    biblioteca.exibirMenu();
    numero = parseInt(
        leitor("\nOPÇÃO:")
    );

    if (numero === 1) {
        let n = leitor("Nome: ");
        let e = leitor("E-mail: ");
        let t = leitor("Telefone: ");
        let contato = {
            nome: n,
            email: e,
            telefone: t
        };
        contatos.push(contato);
        console.log("CONTATO CADASTRADO COM SUCESSO\n\n");
    } else if (numero === 2) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < contatos.length; i++) {
            let nomeContato = contatos[i].nome;
            if (nomeContato.includes(busca)) {
                contatos.splice(i, 1);
                console.log("\n\nCONTATO REMOVIDO!\n\n");
            }
        }
    } else if (numero === 3) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < contatos.length; i++) {
            let nomeContato = contatos[i].nome;
            if (nomeContato.includes(busca)) {
                console.log("\n\nCONTATO ENCONTRADO");
                let t = leitor("Digite o novo telefone: ");
                contatos[i].telefone = t;
                console.log("\n\nCONTATO ATUALIZADO!\n\n");
            }
        }
    } else if (numero === 4) {
        for (let i = 0; i < contatos.length; i++) {
            console.log("\n\nCONTATO #" + (i + 1));
            console.log("Nome: " + contatos[i].nome);
            console.log("E-mail: " + contatos[i].email);
            console.log("Telefone: " + contatos[i].telefone);
        }
        console.log("\n\nFIM DA LISTA!\n\n");
    } else if (numero === 5) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < contatos.length; i++) {
            let = nomeContato = contatos[i].nome;
            if (nomeContato.includes(busca)) {
                console.log("\n\nCONTATO ENCONTRADO");
                console.log("Nome: " + contatos[i].nome);
                console.log("E-mail: " + contatos[i].email);
                console.log("Telefone: " + contatos[i].telefone);
            }
        }
    } else if (numero === 0) {
        console.log("BYE BYE");
    } else {
        console.log("ERRO: OPÇÃO INVÁLIDA");
    }

} while (numero !== 0);