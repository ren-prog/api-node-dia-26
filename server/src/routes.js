const { Router} = require('express');
const authController = require('./controllers/AuthController');


const routes = Router();

routes.get('/teste', ()=> {
    console.log('Segunda rota')
});

routes.post('/login', authController.index);
routes.post('/register', authController.store);



module.exports = routes;