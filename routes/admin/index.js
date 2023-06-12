const { Router } = require("express");
const { GetAllCouriers } = require("./couriers");
const router = Router();

require("dotenv").config();

router.get("/couriers", GetAllCouriers);
module.exports = router;
