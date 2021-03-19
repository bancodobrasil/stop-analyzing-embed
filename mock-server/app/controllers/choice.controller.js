const db = require("../../db.json");

const findAll = async(req, res) => {
    return res.json(db);
};

const addOne = async(req, res) => {
    const choice = req.body;
    return res.json(db);
};

module.exports = {findAll, addOne}