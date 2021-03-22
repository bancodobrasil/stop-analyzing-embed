const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./app/models/db.js");
const choice = require("./app/models/choice.model.js");
const homePage = require("./app/controllers/home.controller.js");
const choiceRouter = require("./app/routes/choice.routes.js");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use('/choice', choiceRouter);

app.get("/", homePage.home);

const run = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    choice.sync();

    app.listen(PORT, () => {
        console.log(`server started successfully at port 4000....`);
    });
}

run();