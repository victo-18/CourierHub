var express = require('express');
const { Op, Sequelize } = require("sequelize");
const { Request, ListState, User, Customer, sequelize, Travel, Transport } = require('../db/Models');
const { request } = require('../app');
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
router.get("/inProgress", async function (req, res) {
    const [otherPhase] = await ListState.findAll({
        attributes:["requestCode"],
        where:{
            "phase":"EN_CAMINO"
        }
    });
    
    console.log(otherPhase);
    const result = await ListState.findAll({
      attributes: ["id","date", "phase", "image","requestCode"],
        where:{
           /* "requestCode":{
                [Op.notIn]: otherPhase
            }*/
        },
      include:[
        {
          model:Request,
          attributes: ["code","destination","description"], 
          include:[{
            model: User,
            attributes: ["phone", "firstname", "lastname", "address", "email"],
          }],
        }
      ],
    });
    // console.log(result);
    res.status(200).json(result);
  });
  
  router.post("/updateStatus1", async function (req, res) {
    const { code } = req.body;
    console.log(code);
    const enCamino = await ListState.create({
      requestCode: code,
      phase: "EN_CAMINO",
    });
  });
router.post('/', async function (req, res) {
    // COMMIT
    // Request.create({...datos})
    // ListStates.create({...datos})
    // END-COMMIT

    // BACK
});

module.exports = router;
