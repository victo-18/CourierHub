var express = require('express');
const { Request, ListState } = require('../db/Models');
const { Sequelize } = require('sequelize');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
    const result = await Request.findAll();
    res.status(200).json(result);
});

// => hostname/api/v1/request/inProgress
router.get('/inProgress', async function (req, res) {
    const result = await Request.findAll({
        include: {
            model: ListState,
            where: {
                phase: 'SOLICITADO'
            }
        }

    });

    console.log(result);
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
