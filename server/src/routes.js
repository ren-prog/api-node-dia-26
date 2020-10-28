const { Router } = require('express');
const authController = require('./controllers/AuthController');
const productsController = require('./controllers/ProductController');
const authMid = require('./middlewares/Auth');
const routes = Router();

routes.get('/teste', () => {
    console.log('Segunda rota');
});

routes.post('/login', authController.index);
routes.post('/register', authController.store);

routes.get('/products', authMid, productsController.index);

module.exports = routes;
