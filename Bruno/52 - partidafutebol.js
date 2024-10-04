const leitor = require('prompt-sync')();
const biblioteca = require('./52 - biblioteca');
let opcao, p = [];

do {

    opcao = parseInt(leitor('Escolha uma opção: '));
    switch (opcao) {
        case 1:
            console.log('Cadastre uma partida\n');
            biblioteca.cadastrarPartida(p)
            break;
        case 2:
            console.log('Lista das partidas');
            biblioteca.listarPartidas(p);
            break;
        case 3:
            console.log('Saldo de Gols dos Mandantes');
            biblioteca.saldoGols(p);
            break;
        case 0:
            console.log('Sair');
            break;
        default:
            console.log('Opção inválida');
            break;
    }

}while(opcao !== 0);