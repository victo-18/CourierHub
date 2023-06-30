var express = require('express');
const { Request, ListState, User, Customer, sequelize, Travel, Transport } = require('../db/Models');
var router = express.Router();
//
//
router.get('/', async function (req, res) {
    try {
        const result = await Request.findAll({
            attributes: ["code", "destination", "numberPackages"],
            include: [
                { model: ListState, attributes: ["date", "phase", "image"], order: [["date", "DESC"]], limit: 1, separate: true },
                { model: Transport, attributes: ["id", "nameTransport"] },
                { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] }
            ],
        });
        res.status(200).json(result);
    } catch (error) {
        console.error('HA OCURRIDO UN ERROR',error)
    }
  

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
router.get("/inProgress", async function (req, res) {
    const result = await Request.findAll({
      attributes: ["code","destination","description","numberPackages","origin"],
      include: [
        { model: ListState, attributes: ["id","date", "image", "phase"] },
        { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] }
      ]
    });
  
    const r = result.filter((item) => item.ListStates.length == 1);
    res.status(200).json(r);
  });

module.exports = router;
