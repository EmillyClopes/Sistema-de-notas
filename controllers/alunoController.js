const Aluno = require('../models/Aluno');
const fs = require('fs');
const path = require('path');

// Mock de dados 
let alunos = [
    new Aluno(1, 'João Silva', 8, 9),
    new Aluno(2, 'Maria Santos', 7, 6),
    new Aluno(3, 'Pedro Oliveira', 5, 8),
    new Aluno(4, 'Ana Souza', 9, 8.5)
];
let nextId = 5;

const alunoController = {
    // READ - Listar todos
    listar: (req, res) => {
        const html = fs.readFileSync(
            path.join(__dirname, '../views/index.html'), 
            'utf8'
        );
        
        // Gerar tabela HTML com ações
        let tabela = `
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Média</th>
                    <th>Situação</th>
                    <th>Ações</th>
                </tr>
        `;
        
        alunos.forEach(aluno => {
            tabela += `<tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.nota1}</td>
                <td>${aluno.nota2}</td>
                <td>${aluno.calcularMedia().toFixed(1)}</td>
                <td>${aluno.situacao()}</td>
                <td>
                    <a href="/editar/${aluno.id}" class="btn-editar">Editar</a>
                    <a href="/deletar/${aluno.id}" class="btn-deletar" onclick="return confirm('Tem certeza?')">Deletar</a>
                </td>
            </tr>`;
        });
        tabela += '</table>';
        
        // Injetar tabela no HTML
        const pagina = html
            .replace('{{tabela}}', tabela)
            .replace('{{total_alunos}}', alunos.length)
            .replace('{{media_geral}}', calcularMediaGeral());
        
        res.send(pagina);
    },
    
    // CREATE - Adicionar
    adicionar: (req, res) => {
        const { nome, nota1, nota2 } = req.body;
        
        if (nome && nota1 && nota2) {
            const novoAluno = new Aluno(nextId++, nome, nota1, nota2);
            alunos.push(novoAluno);
        }
        
        res.redirect('/');
    },
    
    // READ - Buscar um aluno para edição
    buscarPorId: (req, res) => {
        const id = parseInt(req.params.id);
        const aluno = alunos.find(a => a.id === id);
        
        if (!aluno) {
            return res.redirect('/');
        }
        
        const html = fs.readFileSync(
            path.join(__dirname, '../views/editar.html'), 
            'utf8'
        );
        
        // Preencher formulário com dados do aluno
        const pagina = html
            .replace('{{id}}', aluno.id)
            .replace('{{nome}}', aluno.nome)
            .replace('{{nota1}}', aluno.nota1)
            .replace('{{nota2}}', aluno.nota2);
        
        res.send(pagina);
    },
    
    // UPDATE - Atualizar
    atualizar: (req, res) => {
        const id = parseInt(req.params.id);
        const { nome, nota1, nota2 } = req.body;
        
        const index = alunos.findIndex(a => a.id === id);
        
        if (index !== -1) {
            alunos[index] = new Aluno(id, nome, nota1, nota2);
        }
        
        res.redirect('/');
    },
    
    // DELETE - Remover
    deletar: (req, res) => {
        const id = parseInt(req.params.id);
        alunos = alunos.filter(aluno => aluno.id !== id);
        res.redirect('/');
    }
};

// Função auxiliar para calcular média geral
function calcularMediaGeral() {
    if (alunos.length === 0) return 0;
    const soma = alunos.reduce((acc, aluno) => acc + aluno.calcularMedia(), 0);
    return (soma / alunos.length).toFixed(1);
}

module.exports = alunoController;