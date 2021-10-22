/*
    path: api/login

*/
const { Router } = require('express');
//controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');

const router = Router();

//crear nuevos usuarios 
router.post('/new', crearUsuario);



//crear login
router.post('/', login);

//revalidar token 
router.get('/renew', renewToken);






module.exports = router;