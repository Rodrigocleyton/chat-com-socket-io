const express = require("express")
const app = express()
const http = require("http").createServer(app)
const io = require("socket.io")(http)
const port = 8080


io.on("connection", (socket)=>{
    
    socket.on("disconnect", () =>{
        console.log("Cliente fulano desconectado " + socket.id)
    })

    //io serve para o envio global das mensagens ou socket.boradcast.emit(envia para todo mundo menos para quem enviou)
    //a partir do servidor emita para todo mundo as mensagens enviadas por algum cliente
    socket.on("msg", (data)=>{
        io.emit("showmsg", data)
        console.log(data)
    })
})




app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("index")
})

http.listen(port, ()=>{
    console.log("Servidor rodando na porta ", port)
})