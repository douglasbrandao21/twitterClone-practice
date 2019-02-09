/*
Author: Douglas Brandão dos Santos
Brazil, 10 January 2019
GitHub: https://github.com/douglasbrandao21
LinkedIn: https://www.linkedin.com/in/douglas-brandao/
*/

const express = require('express')

//Instancia um objeto chamado routes da classe express.Router para criar manipuladores de rota.
const routes = express.Router()

const TweetController = require('./controllers/TweetController')
const LikeController = require('./controllers/LikeController')

//o endereço de TweetController.index retorna o json com todos os Tweets feitos, ordenados por data
routes.get('/tweets', TweetController.index)

//o endereço de TweetController.store servirá para armazenar um Tweet no banco
routes.post('/tweets', TweetController.store)

//
routes.post('/Likes/:id', LikeController.store)

module.exports = routes