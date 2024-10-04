const leitor = require('prompt-sync')();

const consulta = () => {
    console.log('Escolha uma Opção: ');
    console.log('1 - Agendar consulta');
    console.log('2 - Cancelar consulta');
    console.log('3 - Buscar consulta por paciente');
    console.log('4 - Informar caixa do dia');
    console.log('5 - Listar Agenda do médico de acordo com o dia');
    console.log('0 - Sair');
}

const agendarConsulta = (c) => {
    let nomePaciente = leitor('Digite o nome do paciente: ');
    let nomeMedico = leitor('Digite o nome do medico: ');
    let dataConsulta = leitor('Digite a data da consulta: ');
    let horarioConsulta = leitor('Digite o horário da consulta: ');
    let valorConsulta = parseInt(leitor('Digite o valor da consulta: '));
    c.push({ nomePaciente, nomeMedico, dataConsulta, horarioConsulta, valorConsulta });
}

const cancelarConsulta = (c) => {
    let busca = leitor('Digite o nome do paciente: ')
    for (let i = 0; i < c.length; i++) {
        let paciente = c[i].nomePaciente;
        if (paciente.includes(busca)) {
            c.splice(i, 1);
            console.log('\n\nCONSULTA CANCELADA');
        }
    }
}

const exibirConsulta = (c) => {
    let busca = leitor('Digite a sua busca: ');
    for (let i = 0; i < c.length; i++) {
        let nomeDoContato = c[i].nomePaciente;
        if (nomeDoContato.includes(busca)) {
            console.log(
                '\n\nNome: ' + c[i].nomePaciente
            );
            console.log(
                'Nome do médico: ' + c[i].nomeMedico
            );
            console.log(
                'Data da consulta: ' + c[i].dataConsulta
            );
            console.log(
                'Horário da consulta: ' + c[i].horarioConsulta
            );
            console.log(
                'Valor da consulta: ' + c[i].valorConsulta
            );
        }
    }
}

const caixaDoDia = (c) => {
    let busca = leitor('Digite a data do caixa: ');
    let custoTotal = 0;
    for (let i = 0; i < c.length; i++) {
        let buscador = c[i].dataConsulta;
        if (buscador.includes(busca)) {
            custoTotal += c[i].valorConsulta
        }
    }
    console.log('O valor total do caixa do dia ' + busca + ' é de: ' + custoTotal);
}

const agendaDoMedico = (c) => {
    let buscaNome = leitor('Digite o nome do médico: ');
    let buscaData = leitor('Digite a data da consulta: ');
    for (let i = 0; i < c.length; i++) {
        let m = c[i].nomeMedico
        let d = c[i].dataConsulta
        if (m.includes(buscaNome) && d.includes(buscaData)) {
            console.log(
                '\n\nNome: ' + c[i].nomeMedico
            );
            console.log(
                'Data da consulta: ' + c[i].dataConsulta
            );
            console.log(
                'Horário da consulta: ' + c[i].horarioConsulta
            );
            console.log(
                'Valor da consulta: ' + c[i].valorConsulta
            );
        }
    }
}

module.exports = {
    consulta,
    agendarConsulta,
    cancelarConsulta,
    exibirConsulta,
    caixaDoDia,
    agendaDoMedico
}