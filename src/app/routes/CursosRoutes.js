import { Router } from 'express';
import CursoController from '../controllers/CursoController.js';

const router = Router();

router.get('/cursos', CursoController.index);
router.get('/cursos/:id', CursoController.show);
router.post('/cursos', CursoController.store);
router.put('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.delete);

export default router;


// get (): Listar tudo
// get (): Listar por id
// post (): Criar dados
// put (): atualizar dados
// delete (): remover dados