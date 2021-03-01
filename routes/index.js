// importamos las dependencias necesarias



var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
})

router.use('/usuarios', require('./usuarios'));
router.use('/mascotas', require('./mascotas'));
router.use('/visitor', require('./visitor'));
router.use('/museums', require('./museums'));


/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/usuarios' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo usuarios.js,
* la función require está importando este archivo */

module.exports = router;