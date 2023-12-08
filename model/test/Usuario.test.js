const {Usuario} = require('../Usuario');

describe('Testes da classe Usuario', () =>{
    it('verifica se a instancia foi criada corretamente', ()=>{
        const usuario = new Usuario();
        expect(usuario instanceof Usuario).toBe(true);
    });

    it('Deve retornar um erro ao tentar listar uma lista sem agendamentos', ()=>{
        const usuario = new Usuario();
        expect(()=>usuario.visualizarAgendamentos()).toThrow("Não há agendamentos para o estudante.");
    });

    
});