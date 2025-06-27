import { Form } from "./form"
import { Tasks } from "./task"



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
    
    <Tasks 
    Titulo="Minha Primeira Tarefa"
    Texto="Estudar React"
    Status="Pendente"
    DataCriacao="27/06/2025"
/>

    </div>
    </div>

</>
    )
}