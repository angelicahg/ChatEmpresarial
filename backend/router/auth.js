/*
    path: api/login

*/
const { Router } = require('express');

const router = Router();

//crear nuevos usuarios 
router.post('/new', (req, res) => {
  res.json({
    ok: true,
    msg: 'new'


  });

});

//crear login
router.post('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'login'


  });

});

//revalidar token 
router.get('/renew', (req, res) => {
  res.json({
    ok: true,
    msg: 'renew'


  });

});






module.exports = router;