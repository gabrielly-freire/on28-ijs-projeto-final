const {Usuario} = require('./Usuario');
const {Monitor} = require('./Monitor');
const { Disciplina } = require('./Disciplina');

class Estudante extends Usuario {
    constructor(matricula, nome, email) {
        super(matricula, nome, email);
        this.presencas = [];
    }

    agendarMonitoria(monitor, disciplina, descricao, data, horario) {
        if (!(monitor instanceof Monitor)) {
            throw ('Erro: Monitor inválido.');
        }

        const novoAgendamento = {
            monitor,
            disciplina,
            descricao,
            data,
            horario,
        };

        this.agendamentos.push(novoAgendamento);

        return `Agendamento realizado com sucesso para a disciplina ${disciplina.nome} com o monitor ${monitor.nome} no horário ${horario}.`;
    }

    cancelarMonitoria(agendamento) {
        const index = this.agendamentos.findIndex(a => a === agendamento);

        if (index !== -1) {
            this.agendamentos.splice(index, 1);
            return 'Agendamento cancelado com sucesso.';
        } else {
            throw ('Erro: Agendamento não encontrado.');
        }
    }

}

module.exports = { Estudante }