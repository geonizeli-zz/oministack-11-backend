const express = require('express')

const OngsController = require('./controllers/OngController')

const connection = require('./database/connection')

const routes = express.Router()

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

module.exports = routes