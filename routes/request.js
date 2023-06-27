var express = require('express');
const { Op, Sequelize, where } = require("sequelize");
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
router.get("/inProgress", async function (req, res) {
  const result = await Request.findAll({
    attributes: ["code","destination","description"],
    include: [
      { model: ListState, attributes: ["id","date", "image", "phase"] },
      { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] }
    ]
  });

  const r = result.filter((item) => item.ListStates.length == 1);
  res.status(200).json(r);
});


// => hostname/api/v1/request/inProgress
router.get("/onWay", async function (req, res) {
  const result = await Request.findAll({
    attributes: ["code","destination","description"],
    include: [
      { model: ListState, attributes: ["id","date", "image", "phase"]
      },
      { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] }
    ]
  });

  const r = result.filter((item) => (item.ListStates.length ==2 ));
  res.status(200).json(r);
});
// multer



// => hostname/api/v1/request/inProgress
router.get("/finished", async function (req, res) {
  const result = await Request.findAll({
    attributes: ["code","destination","description"],
    include: [
      { model: ListState, attributes: ["id","date", "image", "phase"]},
      { model: User, attributes: ["phone", "firstname", "lastname", "address", "email"] }
    ]
  });

  const r = result.filter((item) => item.ListStates.length ==3);
  res.status(200).json(r);
});

router.post("/updateStatus1", async function (req, res) {
  const { code } = req.body;
  console.log(code);
  const enCamino = await ListState.create({
    requestCode: code,
    phase: "EN_CAMINO",
  });
  res.sendStatus(200);
});
/*
router.post("/updateStatus2", async function (req, res) {
  const { code } = req.body;
  console.log(code);
  const enCamino = await ListState.create({
    requestCode: code,
    phase: "ENTREGADO",
  });
  res.sendStatus(200); 
});
*/
router.post('/', async function (req, res) {
  // COMMIT
  // Request.create({...datos})
  // ListStates.create({...datos})
  // END-COMMIT

  // BACK
});

module.exports = router;
