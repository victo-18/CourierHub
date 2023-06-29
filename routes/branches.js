var express = require('express');
var router = express.Router();
const { setMessage } = require('../middleware/react_aux');
const { BranchOffice, Customer } = require('../db/Models');

//Devuelve todas las sucursales de un cliente
router.get('/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const dato = await Customer.findOne({
            where: {
                phone: id
            },
            attributes: ['id'],
        })
        const customerId = dato.dataValues.id;
        const response = await BranchOffice.findAll({
            attributes: ['nit','customerId', 'name', 'address', 'phone'],
            where: { customerId: customerId },
            order: ['name','nit']
        });
      res.json(response);
    } catch (error) {
        console.error(error);
    }
    
});

// Crea una nueva sucursal en la base de datos
router.post('/crear', async (req,res)=>{
    const {nit, customerId, name, address, phone} = req.body;
    try {
        const response = await BranchOffice.create({
            nit: nit,
            customerId: customerId,
            name: name,
            address: address,
            phone: phone
        });
        res.send('true');  
    } catch (error) {
        console.error(error);
    }
})

//Modifica la sucursal de acuerdo a su llave primaria
router.put('/modifica', async (req, res) =>{
    const {nit, name, address, phone} = req.body;
    try {
        const response = await BranchOffice.update(
            {name: name,
            address: address,
            phone: phone},
            {where: {
                nit: nit
            }});
        res.send('true');
    } catch (error) {
        console.error(error);
    }
})

//Modifica la sucursal de acuerdo a su llave primaria
router.delete('/elimina/:id', async (req, res) =>{
    const nit = req.params.id;
    try {
        const response = await BranchOffice.destroy({
            where: {
                nit: nit
            }
        });
        res.send('true');
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;