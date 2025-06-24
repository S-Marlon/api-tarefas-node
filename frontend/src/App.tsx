import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

const Tarefas = ( {children}: Titleprompps ) => {
  return (
    <>
    
      <div>
        <h2>Minhas Tarefas</h2>
        <ul>
          <li>Tarefa 1</li>
          <li>Tarefa 2</li>
          <li>Tarefa 3</li>
        </ul>
      </div>
    
  </>
  )
};

function App() {
  
  return (
    <>
      <Title size = 'large'>
        Gestor de Tarefas      
      </Title>

      <Tarefas>
        <h2>Minhas Tarefas</h2>
        <ul>
          <li>Tarefa 1</li>
          <li>Tarefa 2</li>
          <li>Tarefa 3</li>
        </ul>
      </Tarefas>
    </>
  )
}

export default App
