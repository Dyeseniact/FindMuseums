const {
    Request,
    Response
} = require("express");
const Service = require("../models/Service");
const jwt = require('jsonwebtoken');



const getService = async (req, res) => {
    const service = await Service.default.findAll({
        where: {
            status: 1
        }
    });

    res.json(service);
}



const getServiceByID = async (req, res) => {

    const {
        id
    } = req.params;
    const service = await Service.default.findAll({
        where: {
            status: 1,
            id: id
        }
    });
    console.log(service.length);
    if (service.length > 0) {
        res.json(service)
    } else {
        res.status(400).json({
            msg: `No existe un servicio con el id: ${id}`
        })
    }

}

const postService = async (req, res) => {

    const {
        body
    } = req;

    const {
        description
    } = req.body;

    try {
        if (description == undefined) {
            return res.status(400).json({
                msg: 'La descripción no puede ir vacía'
            });
        }
        var service = await Service.default.findOne({
            where: {
                description: description
            }
        });
        if (service) {
            return res.status(400).json({
                msg: 'El servicio ya existe'
            });

        } else {


            // Guardar servicio
            service = await Service.default.create(body);


            res.status(201).json({
                service

            });

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Error, favor de comunicarse con el administrador`
        });
    }
}



const putService = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        body
    } = req;
    const user = await getIdByToken(req, res);
    try {
        if (user.status == 3) {

            const service = await Service.default.findByPk(id);
            if (!service) {
                return res.status(400).json({
                    msg: 'No existe un service con el id: ' + id
                })
            }
            await service.update(body);

            res.json(service);
        } else {
            return res.status(404).json({
                msg: `Esta peticion solo puede ser realizada por el super usuario`
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Favor de comunicarse con el administrador`
        })
    }
}

const deleteService = async (req, res) => {
    const {
        id
    } = req.params;
    const user = await getIdByToken(req, res);
    try {
        if (user.status == 3) {
        var service = await Service.default.findByPk(id);
        if (!service) {
            return res.status(400).json({
                msg: 'No existe un service con el id: ' + id
            })
        }

        await service.update({
            status: 0
        });

        res.json(service);
    } else {
        return res.status(404).json({
            msg: `Esta peticion solo puede ser realizada por el super usuario`
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
    getService,
    getServiceByID,
    postService,
    putService,
    deleteService
}