import { Form } from "./form"
import { TaskList } from "./taskList"

export const Wrap = () => {
    return (
<>
    <div className="form-wrapper">
        <Form />
    </div>
    
    <div className="task-wrapper">
        <h2>Minhas Tarefas</h2>
        buscar: <input type="text" placeholder="pesquisar tarefa" />
        <button>buscar</button> - - --- - -
        filtro:  <button>pendente</button><button>concluída</button>
    
    <div className="wrap-grid">
    
    <TaskList />
    
    </div>
    </div>
</>
)}