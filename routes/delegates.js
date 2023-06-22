var express = require('express');
var router = express.Router();
const { Delegate, Request, DeliveryCourier, User, Customer } = require('../db/Models');

/* Obtiene el historial de pedidos realizados por el cliente*/
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    var a, b, c = [];
    var arreglo = [];
    try {
        const dato = await Customer.findOne({
            where: {
                phone: id
            },
            attributes: ['id'],
        })
        const customerId = dato.dataValues.id;

        const request = await Request.findAll({
            where: { customerId: customerId },
            attributes: ['code', 'dateRequest', 'destination', 'description', 'numberPackages'],
            order:  ['dateRequest']
        });
        a = JSON.parse(JSON.stringify(request));
        
        const delegate = await Delegate.findAll({
            attributes: ['courierId', 'deliveryId'],
        })
        b = JSON.parse(JSON.stringify(delegate));

        const mensajeros = await DeliveryCourier.findAll({
            attributes: ['id', 'phone'],
            include: {
                model: User,
                attributes: ['firstname', 'lastname'],
            }
        });
        c = JSON.parse(JSON.stringify(mensajeros));

        b.map((elemento) => {
            a.map((element) =>{
                if(elemento.deliveryId == element.code){
                    c.map((e) => {
                        if(e.id == elemento.courierId){
                            const date = new Date(element.dateRequest)
                            const fecha = date.getUTCDate() + "/" + (date.getUTCMonth() + 1) + "/" +  date.getUTCFullYear();
                            var dato = {
                                fecha: fecha,
                                direccion: element.destination,
                                descripcion: element.description,
                                paquetes: element.numberPackages,
                                mensajero: e.User.firstname + " " + e.User.lastname
                            };
                            arreglo.push(dato);
                        }
                    });
                }
            });
        });

        res.send(arreglo);
    } catch (error) {
        console.error("HA OCURRIDO UN ERROR: ", error);
    }
});


module.exports = router;