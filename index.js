const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const port = 8080









http.listen(port, ()=>{
    console.log("Servidor rodando na porta ", port)
})