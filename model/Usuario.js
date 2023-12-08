class Usuario {
    constructor(matricula, nome, email) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
        this.agendamentos = [];
    }

    visualizarAgendamentos() {
        if (this.agendamentos.length > 0) {
            return this.agendamentos;
        } else {
            throw ('Não há agendamentos para o estudante.');
        }    
    }
}

module.exports = { Usuario };
