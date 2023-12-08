const {Monitor} = require('../Monitor');

describe('Testes da classe Monitor', () =>{
    it('verifica se a instancia foi criada corretamente', ()=>{
        const monitor = new Monitor("matricula", "nome", "email", "disciplina", "horariosDisponivei");
        expect(monitor instanceof Monitor).toBe(true);
    });

    
});