import express from 'express';
import CursoController from './app/controllers/CursoController.js';

const app = express();
app.use(express.json());

////////  Rotas ////////////
app.get('/cursos', CursoController.index);
app.get('/cursos/:id', CursoController.show);
app.post('/cursos', CursoController.store);
app.put('/cursos/:id', CursoController.update);
app.delete('/cursos/:id', CursoController.delete);

export default app;
