


type textProps = {
    Titulo : string;
    Texto: string;
    Status: string;
    DataCriacao: string;
}



// const Title = ( {children, size}: Titleprompps ) => {

export const Tasks = ( {Titulo,Texto,Status,DataCriacao}: textProps ) => {
    return (
        <>

        <div className="tasks">
            
            <div className="task-content">
            
                <h3>{Titulo}</h3>

                <p>{Texto}</p>

                <p>Status: {Status}</p>
                <p>Data de criação: {DataCriacao}</p>
            </div>
            <div className="task-buttons">
                <button className="btn-editar">Editar</button>
                <button className="btn-deletar">Deletar</button>
                {/* <button className="btn-concluir">Concluir</button> */}
            </div>
        </div>

        </>
    );
};



// ## 🧩 Funcionalidades principais:
// ✅ Criar tarefa (POST)

// 📋 Listar todas as tarefas (GET)

// ✏️ Editar tarefa (PUT)

// ❌ Deletar tarefa (DELETE)

// 🔄 Marcar como concluída

// 🗃️ Filtro por status (pendente, concluída)