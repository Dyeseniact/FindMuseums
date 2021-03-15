const {
    Request,
    Response
} = require("express");
const MuseumService = require("../models/MuseumService");
const Service = require("../models/Service");
const jwt = require('jsonwebtoken');
const conection = require("../config/db");

const {
    validationResult
} = require('express-validator');
const {
    QueryTypes
} = require('sequelize');


const getMuseumServices = async (req, res) => {

    const idMusseum = await getIdByToken(req, res);
    try {
        if (idMusseum.status = 2) {
            const museumService = await conection.default.query('SELECT a.id, b.description, a.price, a.limitVisitors, a.timeService FROM museumServices AS a LEFT JOIN services AS b ON a.idService = b.id WHERE  a.idMuseum = ' + idMusseum.id + ' and a.status = 1;', {
                type: QueryTypes.SELECT
            });

            if (museumService.length > 0) {
                res.json(museumService);
            } else {
                return res.status(404).json({
                    msg: `El museo: '${idMusseum.userName}' no ceunta con servisios disponibles`
                });
            }
        } else {
            return res.status(404).json({
              msg: `Esta peticion solo puede ser realizada por museos`
            });
          }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        });
    }

}


const getMuseumServiceByID = async (req, res) => {

    const {
        id
    } = req.params;

    const idMusseum = await getIdByToken(req, res);
    try {
        if (idMusseum.status = 2) {
            const museumService = await conection.default.query('SELECT a.id, b.description, a.price, a.limitVisitors, a.timeService FROM museumServices AS a LEFT JOIN services AS b ON a.idService = b.id WHERE  a.id = ' + id + ' and a.idMuseum = ' + idMusseum.id + ' and a.status = 1;', {
                type: QueryTypes.SELECT
            });

            if (museumService.length > 0) {
                res.json(museumService);
            } else {
                return res.status(404).json({
                    msg: `No existe un servicio con el id: ${id} para el museo: '${idMusseum.userName}'`
                });
            }
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por museos`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        });
    }
}


const postMuseumServices = async (req, res) => {


    //revisar si hay errores
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        body
    } = req;
    const idMusseum = await getIdByToken(req, res);

    try {
        if (idMusseum.status = 2) {
            if (idMusseum.id == body.idMuseum) {
                var service = await MuseumService.default.findOne({
                    where: {
                        idService: body.idService,
                        idMuseum: idMusseum.id,
                        status: 1
                    }
                });

                if (service) {
                    return res.status(400).json({
                        msg: `El servicio ya existe para el museo: '${idMusseum.userName}'`
                    });
                }
                //save service
                service = await MuseumService.default.create(body);
                res.json({
                    service
                });
            } else {
                return res.status(404).json({
                    msg: `Esta peticion solo puede ser realizada por museos`
                });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        });
    }
}



const putMuseumServices = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        body
    } = req;

    const idMusseum = await getIdByToken(req, res);
    try {

        if (idMusseum.status = 2) {
            var service = await MuseumService.default.findOne({
                where: {
                    id: id,
                    idMuseum: idMusseum.id,
                    status: 1
                }
            });
            if (!service) {
                return res.status(404).json({
                    msg: `No existe un service con el id: ${id} disponible Para el museo: '${idMusseum.userName}'`
                });
            }
            if (body.idService) {
                service = await MuseumService.default.findOne({
                    where: {
                        idService: body.idService,
                        idMuseum: idMusseum.id,
                        status: 1
                    }
                });
                if (service) {
                    return res.status(400).json({
                        msg: `El campo: 'idService' no se puede editar`
                    });
                }
            }
            await service.update(body);
            res.json(service);
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por museos`
            });
            
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        })
    }
}


const deleteMuseumServices = async (req, res) => {
    const {
        id
    } = req.params;

    const idMusseum = await getIdByToken(req, res);
    try {

        if(idMusseum.status = 2){
            var service = await MuseumService.default.findOne({
                where: {
                    id: id,
                    idMuseum: idMusseum.id,
                    status: 1
                }
            });
            if (!service) {
                return res.status(404).json({
                    msg: `No existe un service con el id: ${id} disponible Para el museo: '${idMusseum.userName}'`
                });
            }
            await service.update({
                status: 0
            });
            res.json(service);
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por museos`
            });
            
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        })
    }
}

function getIdByToken(req, res) {
    try {
        const token = req.header('x-auth-token');
        const encryption = jwt.verify(token, process.env.SECRETA);
        return req.user = encryption.user;
    } catch (error) {
        return res.status(404).json({
            msg: `Token no valido`
        });
    }
}
module.exports = {
    getMuseumServices,
    getMuseumServiceByID,
    postMuseumServices,
    putMuseumServices,
    deleteMuseumServices
}