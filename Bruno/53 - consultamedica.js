const leitor = require('prompt-sync')();
const biblioteca = require('./53 - biblioteca');

let opcao, c = [];


do {
    biblioteca.consulta();
    opcao = parseInt(leitor('Escolha uma opção: '));
    switch (opcao) {
        case 1:
            console.log('Agendar consulta\n');
            biblioteca.agendarConsulta(c)
            break;
        case 2:
            console.log('Cancelar consulta');
            biblioteca.cancelarConsulta(c);
            break;
        case 3:
            console.log('Buscar consulta por paciente');
            biblioteca.exibirConsulta(c);
            break;
        case 4:
            console.log('Informar caixa do dia');
            biblioteca.caixaDoDia(c);
            break;
        case 5:
            console.log('Listar Agenda do médico de acordo com o dia');
            biblioteca.agendaDoMedico(c);
            break;
        case 0:
            console.log('Sair')
            break;
    }

}while(opcao !== 0);