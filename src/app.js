import express from 'express';
import cursoRoutes from './app/routes/CursosRoutes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Healthcheck
app.get('/health', (_req, res) => res.status(200).json({ status: 'ok' }));

// Rotas
app.use(cursoRoutes);

// Middleware 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

export default app;
