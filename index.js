const express = require("express")
const app = express();
const handlerbars = require('handlebars')

app.get("/", function(req,res) {
 res.sendFile(__dirname + "/html/index.html");
})


app.listen(8090, function(){
    console.log("Servidor rodando na url http://localhost:8090")
})
