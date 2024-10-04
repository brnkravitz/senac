const leitor = require('prompt-sync')();

const exibirPartidas = () => {
    console.log('Escolha uma Opção: ');
    console.log('1 - Cadastrar Partida');
    console.log('2 - Listar Partidas (resultado)');
    console.log('3 - Saldo de Gols dos mandantes');
    console.log('0 - Sair');
}

const cadastrarPartida = (p) => {
    let nomeMandante = leitor('Digite o nome do mandante: ');
    let nomeVisitante = leitor('Digite o nome do visitante: ');
    let golsMandante = parseInt(leitor('Gols mandante: '));
    let golsVisitante = parseInt(leitor('Gols visitante: '));
    p.push({ nomeMandante, nomeVisitante, golsMandante, golsVisitante })
}

const listarPartidas = (p) => {
    for (let i = 0; i < p.length; i++) {
        const partida = p[i];
        console.log('Resultados\n' + partida.nomeMandante + ' ' + partida.golsMandante + ' x ' + partida.golsVisitante + ' ' + partida.nomeVisitante)
    }
}


const saldoGols = (p) => {
    let acumulador = 0;

    for (let i = 0; i < p.length; i++) {
       let saldo = p[i].golsMandante - p[i].golsVisitante
       acumulador += saldo
    }
    console.log(acumulador)
}


module.exports = {
    exibirPartidas,
    cadastrarPartida,
    listarPartidas,
    saldoGols
};