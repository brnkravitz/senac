const leitor = require("prompt-sync")();
let numero, funcionario = [];


do {
    console.log("SISTEMA RH");
    console.log("\nEscolha uma opção: \n");
    console.log("1 - Cadastrar funcionario");
    console.log("2 - Atualizar cargo do funcionário");
    console.log("3 - Atualizar salário do funcionário");
    console.log("5 - Buscar funcionário por CPF");
    console.log("6 - Remover funcionário");
    console.log("7 - Exibir custo total de RH da empresa");
    console.log("8 - Exibir o custo dos funcionários de cargo Motorista");
    console.log("0 - Sair");
    numero = parseInt(
        leitor("\nOPÇÃO: ")
    );

    if (numero === 1) {
        let n = leitor("Nome: ");
        let cpf = leitor("CPF: ");
        let s = parseInt(leitor("Salário: "));
        let cargo = leitor("Cargo: ");
        let cadastro = {
            nome: n,
            cpf: cpf,
            salario: s,
            cargo: cargo,
        };
        funcionario.push(cadastro);
        console.log("FUNCIONÁRIO CADASTRADO COM SUCESSO\n\n");
        

    } else if (numero === 5) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < funcionario.length; i++) {
            let cpfFuncionario = funcionario[i].cpf;
            if (cpfFuncionario.includes(busca)) {
                console.log("\n\nCONTATO ENCONTRADO");
                console.log("Nome: " + funcionario[i].nome);
                console.log("CPF: " + funcionario[i].cpf);
                console.log("Salário: " + funcionario[i].salario);
                console.log("Cargo: " + funcionario[i].cargo);
            }
        }
    } else if (numero === 6) {
        let busca = leitor("Digite o CPF do funcionário: ");
        for (let i = 0; i < funcionario.length; i++) {
            let cpfFuncionario = funcionario[i].cpf;
            if (cpfFuncionario === busca) {
                funcionario.splice(i, 1);
                console.log("\n\nCONTATO REMOVIDO!\n\n");
            }
        }
    } else if (numero === 7) {
        let custoTotal = 0;
        for (let i = 0; i < funcionario.length; i++) {
            custoTotal += funcionario[i].salario;
        }
        console.log("CUSTO TOTAL DOS FUNCIONARIOS DA EMPRESA: " + custoTotal);
    } else if(numero === 4) {
        let busca = leitor("Digite a sua busca: ");
        for (let i = 0; i < funcionario.length; i++) {
            let cpfFuncionario = funcionario[i].nome;
            if (cpfFuncionario.includes(busca)) {
                console.log("\n\nCONTATO ENCONTRADO");
                console.log("Nome: " + funcionario[i].nome);
                console.log("CPF: " + funcionario[i].cpf);
                console.log("Salário: " + funcionario[i].salario);
                console.log("Cargo: " + funcionario[i].cargo);
            }
        }
    } else if (numero === 8) {
        let custoTotal = 0;
        for (let i = 0; i < funcionario.length; i++) {
            if(funcionario[i].cargo === "Motorista")
                custoTotal += funcionario[i].salario
        }
        console.log("O CUSTO TOTAL DOS MOTORISTAS SÃO: " + custoTotal);
    } else if (numero === 2) {
        let busca = leitor("Digite sua busca: ");
        for (let i = 0; i < funcionario.length; i++) {
            let cpfFuncionario = funcionario[i].cpf;
            if(cpfFuncionario.includes(busca)) {
                console.log("\n\nCONTATO ENCONTRADO");
                let t = leitor("Digite o novo cargo do funcionário: ");
                funcionario[i].cargo = t;
                console.log("\n\nCONTATO ATUALIZADO!\n\n");
            }
        }
    } else if (numero === 2) {
        let busca = leitor("Digite sua busca: ");
        for (let i = 0; i < funcionario.length; i++) {
            let cpfFuncionario = funcionario[i].cpf;
            if(cpfFuncionario.includes(busca)) {
                console.log("\n\nCONTATO ENCONTRADO");
                let rs = leitor("Digite o novo salário do funcionário: ");
                funcionario[i].salario = rs;
                console.log("\n\nCONTATO ATUALIZADO!\n\n");
            }
        }
    }
} while (numero !== 0);