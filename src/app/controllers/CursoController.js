// index (): Listar tudo
// show (): Listar por id
// store (): Criar dados
// update (): atualizar dados
// delete (): remover dados

import conexao from "../database/conexao.js";

class CursoController {
  index(req, res) {
    conexao.query("SELECT * FROM curso", (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

  show(req, res) {
    conexao.query("SELECT * FROM curso WHERE id = ?", [req.params.id], (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result[0]);
    });
  }

  store(req, res) {
    const { disciplina } = req.body;
    conexao.query("INSERT INTO curso (disciplina) VALUES (?)", [disciplina], (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, disciplina });
    });
  }

  update(req, res) {
    const { disciplina } = req.body;
    conexao.query("UPDATE curso SET disciplina = ? WHERE id = ?", [disciplina, req.params.id], (err) => {
      if (err) return res.status(500).send(err);
      res.json({ id: req.params.id, disciplina });
    });
  }

  delete(req, res) {
    conexao.query("DELETE FROM curso WHERE id = ?", [req.params.id], (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: `Curso ${req.params.id} deletado` });
    });
  }
}

export default new CursoController();
