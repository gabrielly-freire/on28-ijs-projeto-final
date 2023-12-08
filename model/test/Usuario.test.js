const {Usuario} = require('../Usuario');

describe('Testes da classe Usuario', () =>{
    it('verifica se a instancia foi criada corretamente', ()=>{
        const usuario = new Usuario();
        expect(usuario instanceof Usuario).toBe(true);
    });

    it('Deve retornar a lista de agentamentos', ()=>{
        const usuario = new Usuario();
        expect(usuario.visualizarAgendamentos()).toStrictEqual([]);
    });

    
});