import React, { useEffect, useState } from "react";
import { Tasks } from "./task";

type TaskType = {
    id: number;
    titulo: string;
    descricao: string;
    status: string;
    data_criacao: string;
};

export const TaskList = () => {
    const [tarefas, setTarefas] = useState<TaskType[]>([]);
const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/tasks/")
            .then(res => res.json())
            .then(data => setTarefas(data.tasks))
            .catch(err => {
            setErro("Erro ao conectar com o backend");
            console.error(err);
    });
    }, []);

    return (
    <>
        {erro && <p>{erro}</p>}
        {tarefas.map(tarefa => (
            <Tasks
                Id={tarefa.id}
                Titulo={tarefa.titulo}
                Texto={tarefa.descricao}
                Status={tarefa.status}
                DataCriacao={tarefa.data_criacao}
            />
        ))}
    </>
);
};