import { openDb } from './src/db/configDB.js';
import express from'express';
import cors from 'cors';
const app = express();

import createTable from './src/controller/tarefas.js';

import taskRoutes from './src/routes/task.js';
import { create } from 'domain';

createTable(); // Cria a tabela de tarefas se não existir

openDb().then(() => {
    console.log('Banco de dados conectado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
 
  
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está no ar!');
});

// Usa as rotas em /api/tasks
app.use('/api/tasks', taskRoutes);




// Este arquivo define as rotas para gerenciar tarefas, incluindo obter, criar, atualizar e
app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});


