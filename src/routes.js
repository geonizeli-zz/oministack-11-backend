const express = require('express')

const OngsController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')

const routes = express.Router()

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes