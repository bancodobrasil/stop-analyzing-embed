const db = require("../../db.json");
const Choices = require("../models/choice.model.js");

const findAll = async(req, res) => {
    await Choices.sync();
    const placeholder = [];

    const allChoice = await Choices.findAll({
        attributes: [
            'id_choise',
            'title',
            'subtitle',
            'contentURL',
            'size',
            'color',
        ],
    });

    allChoice.forEach(element => {
        let tmp = {};
        tmp["id"] = element.id_choise;
        tmp["title"] = element.title;
        tmp["subtitle"] = element.subtitle;
        tmp["contentURL"] = element.contentURL;
        tmp["attributes"] = {
            size: element.size,
            color: element.color
        };
        placeholder.push(tmp);
    });

    res.json({choices: placeholder});
};

const addOne = async(req, res) => {
    await Choices.sync();

    if (!req.body.id) {
        return res.status(400).send({
            message: "Your id is empty"
        });
    } if (!req.body.title) {
        return res.status(400).send({
            message: "Your id is title"
        });
    } if (!req.body.subtitle) {
        return res.status(400).send({
            message: "Your id is subtitle"
        });
    } if (!req.body.contentURL) {
        return res.status(400).send({
            message: "Your id is contentURL"
        });
    } if (!req.body.attributes.size) {
        return res.status(400).send({
            message: "Your id is size"
        });
    } if (!req.body.attributes.color) {
        return res.status(400).send({
            message: "Your id is color"
        });
    }

    const newChoice = await Choices.build({
        id_choise: req.body.id,
        title: req.body.title,
        subtitle: req.body.subtitle,
        contentURL: req.body.contentURL,
        size: req.body.attributes.size,
        color: req.body.attributes.color,
    });
    
    newChoice.save();
    return res.json({message: "Send"});
};

module.exports = {findAll, addOne}