import mysql from 'mysql2/promise';

// Conexão com banco usando mysql2/promise
const conexao = await mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'cursosbd',
  port: 3306
});

class CursoRepository {
  async findAll() {
    const [rows] = await conexao.query("SELECT * FROM cursosbd.curso");
    return rows;
  }

  async findById(id) {
    const [rows] = await conexao.query("SELECT * FROM curso WHERE id = ?", [id]);
    return rows[0] || null;
  }

  async create(disciplina) {
    const [result] = await conexao.query(
      "INSERT INTO curso (disciplina) VALUES (?)",
      [disciplina]
    );
    return { id: result.insertId, disciplina };
  }

  async update(id, disciplina) {
    const [result] = await conexao.query(
      "UPDATE curso SET disciplina = ? WHERE id = ?",
      [disciplina, id]
    );
    if (result.affectedRows === 0) return null;
    return { id, disciplina };
  }

  async delete(id) {
    const [result] = await conexao.query(
      "DELETE FROM curso WHERE id = ?",
      [id]
    );
    if (result.affectedRows === 0) return { message: 'Curso não encontrado' };
    return { message: `Curso ${id} deletado com sucesso` };
  }
}

export default new CursoRepository();
