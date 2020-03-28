const express  = require('express');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();


/**
 * MÉTODOS HTTP:
 * 
 * GET: Buscar informações.
 * POST: Criar informações no backend
 * PUT: Alterar informações
 * DELETE: Deletar informações
 * ...
 * 
 * 
 * Tipos de Parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação (?nome=Mateus&idade=28))
 * Route Params: Parâmetros utilizados para identificar recursos  (/users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);

routes.get('/incidents', IncidentController.index);

routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;