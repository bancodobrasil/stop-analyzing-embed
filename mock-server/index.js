const express = require('express');
const bodyParser = require('body-parser');
const mockApi = require('./API/mockApi');


var app = express();
app.use(bodyParser.json());



app.listen(3000, () => console.log('server started successfully at port : 3000....'));
app.use('/', mockApi);