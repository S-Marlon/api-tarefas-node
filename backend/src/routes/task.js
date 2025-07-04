import { log } from 'console';
import { Router } from 'express';
import { getTask, insertTask, deleteTask} from '../controller/tarefas.js';

const router = Router();

//---------- Rota para obter a lista de tarefas ----------//

router.get('/', async (req, res) => {
  try {
    const listatarefa = await getTask(); // Obtém a lista de tarefas do banco de dados
    log("Lista de tarefas obtida com sucesso!");
    res.send({
      message: "Lista de tarefas",
      tasks: listatarefa // Retorna a lista de tarefas diretamente
    });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao obter lista de tarefas",
      error: error.message
    });
  }
});

//---------- Rota para criar tarefas ----------//

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

//---------- Rota para atualizar tarefas ----------//

router.put('/alter/:id', (req, res) => {
  // Lógica para atualizar uma tarefa existente
  log('Atualizando a tarefa com ID:', req.params.id, 'com os dados:', req.body);
});

//---------- Rota para excluir tarefas ----------//

router.delete('/delete/:id', (req, res) => {
  // Lógica para excluir uma tarefa
  log('Excluindo a tarefa com ID:', req.params.id);
  deleteTask(req.params.id)
    .then(() => {
      res.send({
        message: "Tarefa excluída com sucesso!"
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Erro ao excluir tarefa",
        error: error.message
      });
    });
});

export default router;