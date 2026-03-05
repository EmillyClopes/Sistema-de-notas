const express = require('express');
const bodyParser = require('body-parser');
const alunoController = require('./controllers/alunoController');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Rotas CRUD
app.get('/', alunoController.listar); // READ (listar)
app.post('/adicionar', alunoController.adicionar); // CREATE
app.get('/editar/:id', alunoController.buscarPorId); // READ (buscar um)
app.post('/atualizar/:id', alunoController.atualizar); // UPDATE
app.get('/deletar/:id', alunoController.deletar);  // DELETE

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});