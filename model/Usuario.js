class Usuario {
    constructor(matricula, nome, email) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
        this.agendamentos = [];
    }

    visualizarAgendamentos() {
        return this.agendamentos;
    }
}

module.exports = { Usuario };
