import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
  res.send({
    message: "Lista de tarefas",
    tasks: [] // Aqui você pode retornar uma lista de tarefas do banco de dados
  });
});

router.post('/tasks', (req, res) => {
  // Lógica para criar uma nova tarefa

});

router.put('/tasks/:id', (req, res) => {
  // Lógica para atualizar uma tarefa existente

});

router.delete('/tasks/:id', (req, res) => {
  // Lógica para excluir uma tarefa

});



export default router;