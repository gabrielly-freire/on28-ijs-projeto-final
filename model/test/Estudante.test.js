const { Estudante } = require('../Estudante');
const { Monitor } = require('../Monitor');
const { Disciplina } = require('../Disciplina');

describe('Testes da classe Estudante', () => {
    it('verifica se a instância foi criada corretamente', () => {
        const estudante = new Estudante("2029293924", "Dante", "dante@email.com");
        expect(estudante instanceof Estudante).toBe(true);
    });

    it('Deve agendar uma monitoria com sucesso', () => {
        const estudante = new Estudante("2029293924", "Gabrielly", "gaby@email.com");
        const monitor = new Monitor("8834783", "Dante", "dante@email.com", ["3M56", "6M34"]);
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");

        const result = estudante.agendarMonitoria(monitor, disciplina, "Dúvida na questão 10 - capítulo 6", "8-12-2023", "6M34");

        expect(result).toEqual("Agendamento realizado com sucesso para a disciplina Matemática Elementar com o monitor Dante no horário 6M34.");
    });

    it('Deve retornar um erro ao tentar agendar com monitor inválido', () => {
        const estudante = new Estudante("2029293924", "Gabrielly", "gaby@email.com");
        const monitor = new Estudante("202387484", "João Morais", "joaozinho@email.com");

        expect(() => estudante.agendarMonitoria(monitor)).toThrow("Erro: Monitor inválido.");
    });

    it('Deve cancelar uma monitoria com sucesso', () => {
        const estudante = new Estudante("2029293924", "Gabrielly", "gaby@email.com");
        const monitor = new Monitor("8834783", "Dante", "dante@email.com", ["3M56", "6M34"]);
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");

        estudante.agendarMonitoria(monitor, disciplina, "Dúvida na questão 10 - capítulo 6", "8-12-2023", "6M34");
        const result = estudante.cancelarMonitoria(estudante.agendamentos[0]);

        expect(result).toEqual("Agendamento cancelado com sucesso.");
    });

    it('Deve retornar um erro ao tentar cancelar um agendamento inválido', () => {
        const estudante = new Estudante("2029293924", "Gabrielly", "gaby@email.com");
        const monitor = new Monitor("8834783", "Dante", "dante@email.com", ["3M56", "6M34"]);
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");

        estudante.agendarMonitoria(monitor, disciplina, "Dúvida na questão 10 - capítulo 6", "8-12-2023", "6M34");
        const agendamento = {
            monitor: monitor,
            disciplina: disciplina,
            descricao: "dúvidas em toda a lista de trigonometria",
            data: "20-12-2023",
            horario: "5T12"
        };
        expect(() => estudante.cancelarMonitoria(agendamento)).toThrow("Erro: Agendamento não encontrado.");
    });

    it('Deve retornar uma lista de agendamentos', () => {
        const estudante = new Estudante("2029293924", "Gabrielly", "gaby@email.com");
        const monitor = new Monitor("8834783", "Dante", "dante@email.com", ["3M56", "6M34"]);
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
    
        const agendamento = {
            monitor: monitor,
            disciplina: disciplina,
            descricao: "Dúvida na questão 10 - capítulo 6",
            data: "8-12-2023",
            horario: "6M34"
        };
    
        estudante.agendarMonitoria(monitor, disciplina, agendamento.descricao, agendamento.data, agendamento.horario);
    
        expect(estudante.agendamentos).toContainEqual(agendamento);
    });

    it('Deve retornar um erro ao tentar listar uma lista de agendamento vazia', ()=>{
        const estudante = new Estudante("2029293924", "Gabrielly", "gaby@email.com");

        expect(() => estudante.visualizarAgendamentos()).toThrow('Não há agendamentos para o estudante.');
    });
});
