const express = require('express');

const routes = express.Router();


/* routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show); */
routes.post('/category', CategoryController.store);
routes.get('/category', CategoryController.show);

module.exports = routes;