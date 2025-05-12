import { useState } from "react";
import axios from 'axios'

function Login(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('false');
   


    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(name, password)

        try{
            const response = await axios.post("http://localhost:8090/criar",
            JSON.stringify({name, password}),{
                headers:{ 'Content-Type': 'application/json'}
            }
        );
        } catch (error){
            if(!error?.response){
                setError("erro ao acessar servidor")
            }else if(error.response.status == 401){
                setError("usuario ou senha invalidos")
            }
        }
        
    }

  return (
    <div className="App">
     
      <div className='input'>
        <h2> gerenciador de tarefas</h2>

        <from className="formulario">
          <input type="text" 
          name='name' 
          placeholder='NOME:' 
          required
          onChange={(e) => setName(e.target.value)}
          />
          <input type="password" 
          name='password' 
          placeholder='SENHA:' 
          required
          onChange={(e) => setPassword(e.target.value)}
        />

          <button type='submit' onClick={(e) => handleLogin(e)}>Login </button>
        </from>
        <p>
            {error}
        </p>
      </div>

      
    </div>
  );
}

export default Login;