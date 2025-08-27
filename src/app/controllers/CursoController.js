// index (): Listar tudo
// show (): Listar por id
// store (): Criar dados
// update (): atualizar dados
// delete (): remover dados
import conexao from "./database/conexao.js";

class CursoController {
    index(req,res) {
        conexao.query("SELECT * FROM curso", (err, result) => {
    if (err) return res.status(500).send(err);
    else res.json(result);
  })
}


    show() { }
    store() { }
    update() { }
    delete() { }
}
export default new CursoController()