const db = require("../../db.json");
const Choices = require("../models/choice.model.js");

const findAll = async(req, res) => {
    return res.json(db);
};

const addOne = async(req, res) => {
    await Choices.sync();

    const newChoice = await Choices.build({
        id_choise: req.body.id_choise,
        title: req.body.title,
        subtitle: req.body.subtitle,
        contentURL: req.body.contentURL,
        size: req.body.size,
        color: req.body.color,
    });
    
    newChoice.save();
    return res.json({message: "Send"});
};

module.exports = {findAll, addOne}