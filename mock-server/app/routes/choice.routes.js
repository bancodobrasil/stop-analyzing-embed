const Choice = require("../controllers/choice.controller.js");
const router = require("express").Router();

router.get("/", Choice.findAll);

router.post("/", Choice.addOne);

module.exports = router;