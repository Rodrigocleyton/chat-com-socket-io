const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const port = 8080


io.on("connection", (socket)=>{
    
    socket.on("disconnect", () =>{
        console.log("Cliente fulano desconectado " + socket.id)
    })
})




app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("index")
})

http.listen(port, ()=>{
    console.log("Servidor rodando na porta ", port)
})