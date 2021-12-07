const express = require('express');
const router = require('./app/router');
const server = express();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`linstening on ${PORT}`);
});