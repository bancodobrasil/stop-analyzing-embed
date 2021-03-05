const cors = require('cors');
const express = require('express');
const mockApi = require('./API/mockApi');

var app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
const serverPort = 4000;
app.listen(serverPort, () =>
  console.log(`server started successfully at port ${serverPort}....`)
);
app.use('/', mockApi);
