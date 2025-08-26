import express from 'express';
import conexao from '../infra/conexao.js';

const app = express();
app.use(express.json());

// Listar todos os cursos
app.get('/cursos', (req, res) => {
  conexao.query("SELECT * FROM curso", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// Buscar cursos por id
app.get('/cursos/:id', (req, res) => {
  conexao.query("SELECT * FROM curso WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

// Criar novo curso    
app.post('/cursos', (req, res) => {
  const { disciplina } = req.body;
  conexao.query("INSERT INTO curso (disciplina) VALUES (?)", [disciplina], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, disciplina });
  });
});

// Atualizar um curso já exitente
app.put('/cursos/:id', (req, res) => {
  const { disciplina } = req.body;
  conexao.query("UPDATE curso SET disciplina = ? WHERE id = ?", [disciplina, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ id: req.params.id, disciplina });
  });
});

// Deletar curso
app.delete('/cursos/:id', (req, res) => {
  conexao.query("DELETE FROM curso WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: `Curso ${req.params.id} deletado` });
  });
});

export default app;
