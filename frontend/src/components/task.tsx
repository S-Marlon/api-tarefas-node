type textProps = {
    Titulo : string;
    Texto: string;
    Status: string;
    DataCriacao: string;
    Id: number;
}

const handleEdit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log("Editar tarefa");
}

const handleDelete = async (event: React.FormEvent, Id : number) => {
    event.preventDefault();
    await fetch(`http://localhost:3001/api/tasks/delete/${Id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Id }) // Exemplo de ID, deve ser dinâmico
    }).catch(error => {
        console.error("Erro ao deletar tarefa:", error);
        alert("Erro ao deletar tarefa. Tente novamente mais tarde.");
    });
    
    console.log("Deletar tarefa");
}

export const Tasks = ( {Titulo,Texto,Status,DataCriacao,Id}: textProps ) => {
    return (
        <>

        <div className="tasks" id={String(Id)}>
            
            <div className="task-content">
            
                <h3>{Titulo}</h3>

                <p>{Texto}</p>

                <p>Status: {Status}</p>
                <p>Data de criação: {DataCriacao}</p>
            </div>
            <div className="task-buttons">
                <button className="btn-editar"  onClick={handleEdit}>Editar</button>
                <button className="btn-deletar" onClick={(event) => handleDelete(event, Id)}>Deletar</button>
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