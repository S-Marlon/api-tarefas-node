import { useState } from "react";

export const Form = () => {
    
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [mensagem, setMensagem] = useState("");
// Função para lidar com o envio do formulário

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try{ 
    await fetch("http://localhost:3001/api/tasks/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({titulo,descricao})
    });
    } catch (error){
        console.error("Erro ao enviar a tarefa:", error);
        setMensagem("Erro ao enviar a tarefa. Tente novamente mais tarde.");
        return;
    }
    setTitulo("");
    setDescricao("");
    setMensagem("Tarefa adicionada com sucesso!");
};

return( <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="titulo-tarefa" placeholder="digite o nome da tarefa" value={titulo} onChange={event => setTitulo(event.target.value)}/>
        <br />
        <input type="text" className="descricao-tarefa" placeholder="digite a descrição da tarefa" value={descricao} onChange={event => setDescricao(event.target.value)}/>
        <br />
        <button type="submit" className="submit-tarefa">Adicionar Tarefa</button>
        <br />
        {mensagem && <p className="mensagem">{mensagem}</p>}
        <br />
    </form>
        
)
}