var express = require('express');
const { Request, ListState, User, Customer, sequelize } = require('../db/Models');
var router = express.Router();

router.get('/', async function (req, res) {
    const result = await Request.findAll({
        attributes: ["code", "destination"],
        include: [
            { model: ListState, attributes: ["date", "phase", "image"], order: [["date", "DESC"]], limit: 1, separate: true },
            { attributes: ["id"], model: Customer, include: { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] } }],
    });
    res.status(200).json(result);
});

// => hostname/api/v1/request/inProgress
router.get('/inProgress', async function (req, res) {
    const result = await Request.findAll({
        attributes: ["code", "destination","description"],
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
