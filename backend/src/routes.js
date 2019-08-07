const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

// GET, POST, PUT, DELETE
routes.get('/', (req, res) => {
    return res.json({ message: `Hello ${req.query.name}`});
});

routes.post('/devs', DevController.store);

module.exports = routes;