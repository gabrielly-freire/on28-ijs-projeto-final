const {Disciplina} = require('../Disciplina');
const { Monitor } = require('../Monitor');
const { Estudante } = require('../Estudante');

describe('Testes da classe Disciplina', () =>{
    it('Deve adicionar um monitor válido a lista de monitores', ()=>{

        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        const monitor = new Monitor("2023000000", "Gabrielly Freire", "gabrielly@email.com", disciplina, ["3M56", "6M34"]);

        expect(disciplina.adicionarMonitor(monitor)).toEqual('O monitor Gabrielly Freire foi adicionado com sucesso à disciplina Matemática Elementar.');
    });

    it('Deve retornar um erro ao tentar adicionar um monitor inválido a lista de monitores', ()=>{

        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        const monitor = new Estudante("2023999933", "José Lopes", "zezinho@email.com");

        expect(()=>disciplina.adicionarMonitor(monitor)).toThrow('Monitor inexistente');
    });

    it('Deve remover um monitor válido que está na lista de monitores', ()=>{

        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        const monitor = new Monitor("2023000000", "Gabrielly Freire", "gabrielly@email.com", disciplina, ["3M56", "6M34"]);
        disciplina.adicionarMonitor(monitor);

        expect(disciplina.removerMonitor(monitor)).toEqual('O monitor Gabrielly Freire foi removido com sucesso da disciplina Matemática Elementar.');
    });

    it('Deve retornar um erro ao tentar remover um monitor que não está na lista de monitores', ()=>{

        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        const monitor = new Monitor("2023000000", "Gabrielly Freire", "gabrielly@email.com", disciplina, ["3M56", "6M34"]);
        
        expect(()=>disciplina.removerMonitor(monitor)).toThrow('Erro: Monitor não encontrado na lista de monitores da disciplina Matemática Elementar');
    });

    it('Deve retornar um erro ao tentar remover um monitor inválido na lista de monitores', ()=>{

        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        const monitor = new Estudante("2023999933", "José Lopes", "zezinho@email.com");
        
        expect(()=>disciplina.removerMonitor(monitor)).toThrow('Monitor inexistente');
    });
    // erro
    it('Deve listar os monitores da disciplina', () => {
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        const monitor = new Monitor("2023000000", "Gabrielly Freire", "gabrielly@email.com", disciplina, ["3M56", "6M34"]);
        disciplina.adicionarMonitor(monitor);
    
        // Comparando o objeto Monitor diretamente
        expect(disciplina.listarMonitores()).toEqual([monitor]);
    });
    

    it('Deve retornar um erro ao tentar listar os monitores ainda não definidos', ()=>{
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        expect(()=>disciplina.listarMonitores()).toThrow("Não há monitores registrados para a disciplina Matemática Elementar nesse semestre.");
    });


    it('Deve listar os horários de monitoria da disciplina', ()=>{
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        disciplina.horariosMonitoria = ['2M56', '3M56', '6M34'];

        expect(disciplina.listarHorariosDisponiveis()).toStrictEqual(['2M56', '3M56', '6M34']);

    })

    it('Deve retornar um erro ao tentar listar os horários de monitorias que não foram definidos', ()=>{
        const disciplina = new Disciplina("IMD0001", "Matemática Elementar");
        expect(()=>disciplina.listarHorariosDisponiveis()).toThrow('Ainda não foi definido os horarios de monitoria para a disciplina Matemática Elementar nesse semestre');
    });


});