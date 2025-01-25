const sqlite3 = require('sqlite3').verbose();

// Cria e abre o banco de dados
const db = new sqlite3.Database('./meuBanco.db');

// Função para criar a tabela
const criarTabela = () => {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS atividades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        data_execucao TEXT,
        mes TEXT,
        semana TEXT,
        site_mina TEXT,
        equipamento TEXT,
        om TEXT,
        descricao_breve_da_demanda TEXT,
        status TEXT,
        retorno TEXT,
        tarefa TEXT,
        observacao TEXT,
        centro_de_custo TEXT,
        lider_da_equipe TEXT,
        qtd_de_pessoas_na_equipe INTEGER,
        horario_disponivel TEXT,
        horario_inicio_atividade TEXT,
        horario_finalizacao_atividade TEXT
      )
    `);
  });
};

// Função para salvar os dados
const salvarDados = (dados, callback) => {
  const query = `
    INSERT INTO atividades (
      data_execucao, mes, semana, site_mina, equipamento, om, descricao_breve_da_demanda,
      status, retorno, tarefa, observacao, centro_de_custo, lider_da_equipe, 
      qtd_de_pessoas_na_equipe, horario_disponivel, horario_inicio_atividade, horario_finalizacao_atividade
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [
    dados.data_execucao, dados.mes, dados.semana, dados.site_mina, dados.equipamento, dados.om,
    dados.descricao_breve_da_demanda, dados.status, dados.retorno, dados.tarefa, dados.observacao,
    dados.centro_de_custo, dados.lider_da_equipe, dados.qtd_de_pessoas_na_equipe, dados.horario_disponivel,
    dados.horario_inicio_atividade, dados.horario_finalizacao_atividade
  ], function(err) {
    if (err) {
      return callback(err);
    }
    callback(null, this.lastID);
  });
};

// Função para obter todos os dados
const obterDados = (callback) => {
  db.all("SELECT * FROM atividades", [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

// Exporta as funções para uso externo
module.exports = { criarTabela, salvarDados, obterDados };
