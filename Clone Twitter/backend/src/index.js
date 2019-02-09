/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



//Realiza o gerenciamento de rotas, endereços, requests e respostas de App.
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

//Conecta a aplicação ao banco de dados
mongoose.connect('mongodb://douglasbrandao:Doug59762791@ds135233.mlab.com:35233/omnistack-backend-douglas-brandao', {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    return next()
})

app.use(cors())

app.use(express.json())
//Seta as rotas de App para as rotas presentes em routes.js


app.use(require('./routes'))

//Aplicação sendo ouvida em localhost:3000
server.listen(3000, () => {
    console.log('Server started on port 3000')
})