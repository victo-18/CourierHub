var express = require('express');
const { Request, ListState, User, Customer, sequelize, Travel, Transport } = require('../db/Models');
var router = express.Router();

router.get('/', async function (req, res) {
    const result = await Request.findAll({
        attributes: ["code", "destination", "numberPackages"],
        include: [
            { model: ListState, attributes: ["date", "phase", "image"], order: [["date", "DESC"]], limit: 1, separate: true },
            { model: Transport, attributes: ["id", "nameTransport"] },
            { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] }
        ],
    });
    res.status(200).json(result);
});

router.post('/', async function (req, res) {
    const { transportId, ...others } = req.body;

    const customer = await Customer.findOne({ where: { phone: req.user.phone } })
    const request = await Request.create({ ...others, customerId: customer.dataValues.id });
    await Travel.create({ requestCode: request.dataValues.code, transportId });
    await ListState.create({ requestCode: request.dataValues.code });

    res.status(200).json(request);
});

// => hostname/api/v1/request/inProgress
router.get('/inProgress', async function (req, res) {
    const result = await Request.findAll({
        attributes: ["code", "destination", "description"],
        include: [{
            model: ListState,
            attributes: ["date", "phase", "image"],
            where: { phase: 'SOLICITADO' }
        }, {
            model: Customer,
            attributes: ["id"],
            include: { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] },
        }]
    });

    // console.log(result);
    res.status(200).json(result);
});

router.post('/', async function (req, res) {
    // COMMIT
    // Request.create({...datos})
    // ListStates.create({...datos})
    // END-COMMIT

    // BACK
});

module.exports = router;
