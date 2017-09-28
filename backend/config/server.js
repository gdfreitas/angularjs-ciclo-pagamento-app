const port = 3003

const bodyParser = require('body-parser') // middleware que auxilia a fazer o parse do body da requisição
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int') 

// middlewares genéricos para aplicação
server.use(bodyParser.urlencoded({ extended: true })) // middleware
server.use(bodyParser.json()) // middleware caso o conteúdo seja json vai transformar em um objeto para ser utilizado
server.use(allowCors)
server.use(queryParser()) // middleware que converte os queryParams para inteiro qndo for numero

server.listen(port, () => {
    console.log(`BACKEND is running on port ${port}.`);
})

module.exports = server;