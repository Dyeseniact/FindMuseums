const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    // Leer el toquen del header
    const token = req.header('x-auth-token');
    console.log(token)
    // Revisar si no hay token
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token, permiso no válido'
        });
    }
    // Validar token
    try {
        const encryption = jwt.verify(token, process.env.SECRETA);
        req.user = encryption.user;
        next();

    } catch (error) {
        res.status(400).json({
            msg: 'Token no valido'
        });
        console.log(error)
    }

}