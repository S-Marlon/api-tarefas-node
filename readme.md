## 💡 Projeto: Gerenciador de Tarefas com API REST + Frontend
### Api-tarefas Node

## 📌 Descrição:
Um pequeno sistema web para cadastrar, visualizar, atualizar e excluir tarefas. Ele terá:

Uma interface HTML + TypeScript que manipula o DOM.

Um servidor Node.js com Express que fornece uma API RESTful.

Um banco de dados SQL (SQLite ou MySQL) para armazenar as tarefas.

Regras simples com lógica condicional, como impedir tarefas vazias ou duplicadas.

## 🧩 Funcionalidades principais:
✅ Criar tarefa (POST)

📋 Listar todas as tarefas (GET)

✏️ Editar tarefa (PUT)

❌ Deletar tarefa (DELETE)

🔄 Marcar como concluída

🗃️ Filtro por status (pendente, concluída)

## 📦 Tecnologias utilizadas:
Frontend: HTML + CSS + Typescript

Backend: Node.js + Express

Banco de dados: SQLite (simples) ou MySQL

Testes de API: Postman

Extras sugeridos: Bootstrap para visual bonito

## 📦 Estrutura Completa — Node.js + React (frontend separado)

taskflow/
├── backend/                # API REST com Node.js + Express
│   ├── controllers/        # Lógica das rotas (funções de controle)
│   │   └── taskController.js
│   ├── models/             # Modelos de banco de dados
│   │   └── taskModel.js
│   ├── routes/             # Rotas da API
│   │   └── taskRoutes.js
│   ├── config/             # Configuração do banco de dados
│   │   └── db.js
│   ├── app.js              # App Express principal
│   └── server.js           # Inicialização do servidor
│
├── frontend/               # Aplicação React
│   ├── public/             # Arquivos estáticos
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── pages/          # Páginas principais
│   │   │   └── Home.jsx
│   │   ├── services/       # Comunicação com API
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json        # Dependências React
│
├── .env                    # Variáveis de ambiente
├── .gitignore
├── package.json            # Dependências do Node.js backend
└── README.md


## 🔧 Tecnologias
### Backend:
Node.js
Express
SQLite ou MySQL (via knex, sequelize, ou mysql2)
CORS
dotenv (configuração de variáveis de ambiente)

### Frontend:
React
Axios (para requisições HTTP)
React Router (para navegação)
Bootstrap ou TailwindCSS (opcional)