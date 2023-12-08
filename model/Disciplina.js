const {Monitor} = require('./Monitor');

class Disciplina{
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
        this.horariosMonitoria = [];
        this.monitores = [];
    }

    adicionarMonitor(monitor){
        if(monitor instanceof Monitor){
            this.monitores.push(monitor); 
            return `O monitor ${monitor.nome} foi adicionado com sucesso à disciplina ${this.nome}.`;
        }else{
            throw `Monitor inexistente`;
        }
    }

    removerMonitor(monitor){
        if (monitor instanceof Monitor) {
            const index = this.monitores.findIndex(m => m === monitor);

            if (index !== -1) {
                this.monitores.splice(index, 1);
                return `O monitor ${monitor.nome} foi removido com sucesso da disciplina ${this.nome}.`;
            } else {
                throw `Erro: Monitor não encontrado na lista de monitores da disciplina ${this.nome}.`;
            }
        } else {
            throw `Monitor inexistente`;
        }
    }

    listarMonitores(){
        if (this.monitores.length > 0) {
           return this.monitores;
        } else {
            throw `Não há monitores registrados para a disciplina ${this.nome} nesse semestre.`;
        }
    }

    listarHorariosDisponiveis(){
        if(this.horariosMonitoria.length > 0){
            return this.horariosMonitoria;
        }else{
            throw `Ainda não foi definido os horarios de monitoria para a disciplina ${this.nome} nesse semestre`;
        }
    }
}

module.exports = { Disciplina }