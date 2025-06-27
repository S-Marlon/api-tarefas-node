import { openDb } from "../db/configDB.js";

export default async function createTable(req, res) {
    try{
        openDb().then(db=> (
            db.exec(`CREATE TABLE IF NOT EXISTS tarefa (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                descricao TEXT NOT NULL,
                status TEXT NOT NULL DEFAULT 'pendente',
                data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
            )`)
        ) 
        ).then(() => {
            console.log("Tabela 'tarefa' criada com sucesso!");
        }).catch((error) => {
            console.error("Erro ao criar tabela:", error);
        });
    }catch (error){
        console.error("Erro ao criar tabela:", error);
    }
}

export async function insertTask(titulo,descricao){
    try {
        openDb().then(db => (
            db.run(`INSERT INTO tarefa (titulo, descricao, status) VALUES (?, ?, 'pendente')`, [titulo, descricao])
        ).then(() => {
            console.log("Tarefa inserida com sucesso!");
        }).catch((error) => {
            console.error("Erro ao inserir tarefa:", error);
        }));
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
    }
}

export async function alterTask(titulo,descricao, status, id) {
    try {
        openDb().then(db => (
            db.run(`ALTER TABLE tarefa (id, titulo, descricao, status) VALUES (?, ?, ?, ?)`, [id, titulo, descricao, status])
        ).then(() => {
            console.log("Tarefa alterada com sucesso!");
        }).catch((error) => {
            console.error("Erro ao alterar tarefa:", error);
        }));
    } catch (error) {
        console.error("Erro ao alterada tarefa:", error);
    }
}

export async function getTask() {
    try {
        const db = await openDb();
        const listatarefa = await db.all(`SELECT * FROM tarefa`);
        return listatarefa; 
    } catch (error) {
        console.error("Erro ao obter tarefas:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
    
}

