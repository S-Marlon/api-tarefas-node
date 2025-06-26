import { log } from 'console';
import { Router } from 'express';
import { insertTask } from '../controller/tarefas.js';


const router = Router();


router.get('/', (req, res) => {
  res.send({
    message: "Lista de tarefas",
    tasks: [] // Aqui você pode retornar uma lista de tarefas do banco de dado
  });
});

router.post('/create', (req, res) => {
  // Lógica para criar uma nova tarefa
  log('Criando uma nova tarefa:', req.body);

if (req.body === undefined){
  return res.status(400).send({
    message: "Dados da tarefa não fornecidos"
  })
};
  
  res.send({
    message: "Tarefa criada com sucesso!",
    task: req.body.titulo, // Aqui você pode retornar a tarefa criada
    task: req.body.descricao // Aqui você pode retornar a tarefa criada
  });

  insertTask(req.body.titulo, req.body.descricao);

});

router.put('/alter/:id', (req, res) => {
  // Lógica para atualizar uma tarefa existente
  log('Atualizando a tarefa com ID:', req.params.id, 'com os dados:', req.body);
});

router.delete('/delete/:id', (req, res) => {
  // Lógica para excluir uma tarefa
  log('Excluindo a tarefa com ID:', req.params.id);
});



export default router;