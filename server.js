const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bancoDados = require('./banco-dados');  // Importando o módulo de banco de dados

const app = express();

// Criar tabela ao iniciar o servidor
bancoDados.criarTabela();

app.use(express.static(path.join(__dirname, 'public')));  // Serve arquivos estáticos da pasta public
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para a página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'main.html'));
});

// Rota POST para salvar os dados
app.post('/salvar', (req, res) => {
  const dados = req.body;

  // Salva os dados no banco de dados
  bancoDados.salvarDados(dados, (err, id) => {
    if (err) {
      return res.status(500).send({ error: 'Erro ao salvar os dados no banco.' });
    }
    res.status(200).send({ message: 'Dados salvos com sucesso!', id });
  });
});

// Rota GET para obter todos os dados salvos
app.get('/dados', (req, res) => {
  bancoDados.obterDados((err, rows) => {
    if (err) {
      return res.status(500).send({ error: 'Erro ao buscar os dados.' });
    }
    res.json(rows);  // Retorna os dados em formato JSON
  });
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
