const leitor = require('prompt-sync')();
const biblioteca = require('./51 - biblioteca');
let opcao, apostas = [];

do{
    biblioteca.exibirMenu();
    opcao = parseInt(leitor('Digite a opção: '));
    switch (opcao) {
        case 1:
            console.log('Realizar aposta');
            biblioteca.fazerAposta(apostas);
            break;
        case 2:
            console.log('Exibir apostas');
            biblioteca.exibirApostas(apostas);
            break;
        case 3:
            console.log('Cash out');
            apostas = biblioteca.cashOut(apostas);
            break;
        case 4:
            console.log('Total das apostas')
            biblioteca.totalApostas(apostas)
        case 0:
            console.log('Sair');
            break;
        default:
            console.log('Opção inválida');
            break;
    }   
}while(opcao !== 0)