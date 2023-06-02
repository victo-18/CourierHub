var express = require('express');
const { Request } = require('../db/Models');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
    const result = await Request.findAll();
    res.status(200).json(result);
});

module.exports = router;
