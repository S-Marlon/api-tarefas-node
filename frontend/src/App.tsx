import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './static/_css/App.css'
import { Wrap } from './components/wrap'

type Titleprompps = {
  children: React.ReactNode 
  size?: 'small' | 'medio' | 'large';
}

const Title = ( {children, size}: Titleprompps ) => {
  return (
    <>
    
      <h1 style={{
      fontSize: size == 'small' ? '1rem' : size == 'medio' ? '1.5rem' : '2rem',
    }}
      >
        
        {children}</h1>
      
    
  </>
  )
};

function App() {
  
  return (
    <>
      <Title size = 'large'>
        Gestor de Tarefas      
      </Title>
      
      <Wrap/>
      
    </>
  )
}

export default App

// ## 🧩 Funcionalidades principais:
// ✅ Criar tarefa (POST)

// 📋 Listar todas as tarefas (GET)

// ✏️ Editar tarefa (PUT)

// ❌ Deletar tarefa (DELETE)

// 🔄 Marcar como concluída

// 🗃️ Filtro por status (pendente, concluída)