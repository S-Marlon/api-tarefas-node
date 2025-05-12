const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost', // Seu host MySQL
  user: 'root', // Seu usuário MySQL
  password: '12345', // Sua senha MySQL
  database: 'tarefas' // O nome do seu banco de dados
});

async function getConnection() {
  return await pool.getConnection();
}

module.exports = { getConnection };