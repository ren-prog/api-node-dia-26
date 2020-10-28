const { Router } = require('express');
const authController = require('./controllers/AuthController');
const productsController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const authMid = require('./middlewares/Auth');
const routes = Router();

routes.get('/teste', () => {
    console.log('Segunda rota');
});

routes.post('/login', authController.index);
routes.post('/register', authController.store);

routes.get('/products', authMid, productsController.index);

// routes.prefix('products', authMid, (routerProduct) => {
//     routerProduct.route('/').get(productsController.index);
//     routerProduct.route('/:id/details').get(productsController.index);
// });

routes.get('/usuarios', UserController.index);

module.exports = routes;
