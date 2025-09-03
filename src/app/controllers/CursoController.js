// index (): Listar tudo
// show (): Listar por id
// store (): Criar dados
// update (): atualizar dados
// delete (): remover dados

import CursoRepository from "../repositories/cursoRepository.js";

class CursoController {
  async index(req, res) {
    try {
      const cursos = await CursoRepository.findAll();
      res.json(cursos);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async show(req, res) {
    try {
      const curso = await CursoRepository.findById(req.params.id);
      res.json(curso);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async store(req, res) {
    try {
      const { disciplina } = req.body;
      const curso = await CursoRepository.create(disciplina);
      res.json(curso);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async update(req, res) {
    try {
      const { disciplina } = req.body;
      const curso = await CursoRepository.update(req.params.id, disciplina);
      res.json(curso);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async delete(req, res) {
    try {
      const result = await CursoRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

export default new CursoController();
