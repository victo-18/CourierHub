var express = require('express');
const { City, State } = require('../db/Models');
var router = express.Router();

router.get('/cities/:stateId', async function (req, res) {
    const { stateId } = req.params
    const r = await City.findAll({
        attributes: [['id', 'value'], ['name', 'label']],
        where: { stateId }
    })

    res.status(200).json(r);
});


router.get('/states', async function (req, res) {
    const r = await State.findAll({ attributes: [['id', 'value'], ['name', 'label']] })
    res.status(200).json(r);
});
module.exports = router;
