const express = require('express')
const routes = express.Router()

const users = [{
  id: 1,
  name:'teste',
  password:"senha"
}]

routes.post("/criar", (req,res) => {
    const {name, password} = req.body;
    
    const user = users.find(user => user.name === name && user.password === password)
    if(user){
      return res.status(200).json(user);
    } else{
      return res.status(401).json({message:'credenciais invalidas'});
    }
  
  res.send("nome da anotação é :" +nome);

});

routes.post("/editar", (req,res) => {
    res.send("editar anotação");
  });

routes.post("/ver", (req,res) => {
    res.send("ver anotação");
  });

routes.post("/deletar", (req,res) => {
    res.send("deletar anotação");
  });

module.exports = routes