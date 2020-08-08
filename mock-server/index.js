const express = require("express");
const bodyParser = require("body-parser");
const mockApi = require("./API/mockApi");

var app = express();
app.use(bodyParser.json());
const serverPort = 4000;
app.listen(serverPort, () => console.log(`server started successfully at port ${serverPort}....`));
app.use("/", mockApi);
