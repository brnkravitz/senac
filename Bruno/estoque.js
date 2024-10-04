const leitor = require('prompt-sync')();
let numero, produtos = [];



do {
    console.log("\nMENU: ");
    console.log("1 - Cadastrar produto");
    console.log("2 - Remover produto");
    console.log("3 - Buscar produto");
    console.log("4 - Mostrar total em estoque");
    console.log("0 - Sair")
    numero = parseInt(
        leitor("\nOPÇÃO:")
    );


    if (numero === 1) {
        let n = leitor("Nome: ");
        let p = leitor("Preço: ");
        let q = parseInt(leitor("Quantidade: "));
        let produto = {
            nome: n,
            preco: p,
            quantidade: q
        };
        produtos.push(produto);
        console.log("PRODUTO CADASTRADO COM SUCESSO\n\n");
    } else if (numero === 2) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < produtos.length; i++) {
            let nomeProduto = produtos[i].nome;
            if (nomeProduto.includes(busca)) {
                produtos.splice(i, 1);
                console.log("\n\nPRODUTO REMOVIDO!\n\n");
            }
        }
    } else if (numero === 3) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < produtos.length; i++) {
            let nomeProduto = produtos[i].nome;
            if (nomeProduto.includes(busca)) {
                console.log("\n\nPRODUTO ENCONTRADO\n\n");
                console.log("Nome: " + produtos[i].nome);
                console.log("Preço: " + produtos[i].preco);
                console.log("Quantidade: " + produtos[i].quantidade);
            }
        }
    } else if(numero === 4) {
        let estoque = 0;
        for (let i = 0; i < produtos.length; i++) {
            estoque += produtos[i].quantidade;
        }
        console.log("TOTAL DE PRODUTOS EM ESTOQUE" + estoque);
    } else if (numero === 0) {
        console.log("OBRIGADO POR CONFERIR O ESTOQUE");
    }

} while (numero !== 0);