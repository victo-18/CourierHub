const { Router } = require("express");
var express = require("express");
//const { GetAllCouriers } = require("./couriers");
var router= express.Router();
const { DeliveryCourier, User } = require("../../db/Models");

//require("dotenv").config();

router.get("couriers", async function (req, res) {
    const result = await DeliveryCourier.findAll({
        attributes: ["id"],
        include: { model: User, attributes: ["firstname", "lastname","phone"] }
    });
    res.status(200).json(result);
})
module.exports = router;
