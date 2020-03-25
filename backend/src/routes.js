const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Session
routes.post('/sessions', SessionController.create);
//Session

//Ong
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
//Ong

//Profile
routes.get('/profile', ProfileController.index);
//Profile

//Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
//Incidents



module.exports = routes; 