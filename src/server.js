const express = require('express')
const routes = require('./routes')
const app = express();
const cors = require('cors')
const { getConnection } = require('./database');

app.use(express.json());
app.use(cors())
app.use(routes)


app.get("/", function(req,res) {
    res.sendFile(__dirname + "/html/index.html");
   })



app.get('/api/:codigoUsuario', async (req, res) => {
  const { codigoUsuario } = req.params;
  let connection;
  try {
    connection = await getConnection();
    const [rows] = await connection.execute(
      'SELECT * FROM tarefa WHERE idtarefa = ?',
      [codigoUsuario]
    );
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar anotações:', error);
    res.status(500).json({ message: 'Erro ao buscar anotações no servidor' });
  } finally {
    if (connection) connection.release();
  }
});


app.listen(8090, function(){
    console.log("Servidor rodando na url http://localhost:8090")
})
