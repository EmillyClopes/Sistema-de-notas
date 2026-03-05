class Aluno {
    constructor(id, nome, nota1, nota2) {
        this.id = id;
        this.nome = nome;
        this.nota1 = parseFloat(nota1);
        this.nota2 = parseFloat(nota2);
    }
    
    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }
    
    situacao() {
        const media = this.calcularMedia();
        if (media >= 7) {
            return 'Aprovado';
        } else if (media >= 5) {
            return 'Recuperação';
        } else {
            return 'Reprovado';
        }
    }
}

module.exports = Aluno;