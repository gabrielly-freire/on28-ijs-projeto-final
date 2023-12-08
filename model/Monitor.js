const { Usuario } = require('./Usuario');

class Monitor extends Usuario {
    constructor(matricula, nome, email, disciplina, horariosDisponiveis) {
        super(matricula, nome, email);
        this.disciplina = disciplina;
        this.horariosDisponiveis = horariosDisponiveis;
    }

    marcaPresenca(){
        
    }
}

module.exports = { Monitor }