const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    //leer el toquen del header
    const token = req.header('x-auth-token');
    console.log(token)
    //revisar si nohay token
    if(!token){
        return res.status(401).json({msg: 'No hay token, permiso no valido'});
    }
    // validar token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario;
        next();
        
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'});
        console.log(error)
    }

}