const { DeliveryCourier, User } = require("../../db/Models");

require("dotenv").config();

exports.GetAllCouriers = async function (req, res) {
    const result = await DeliveryCourier.findAll({
        attributes: ["id"],
        include: { model: User, attributes: ["firstname", "lastname"] }
    });
    res.status(200).json(result);
}