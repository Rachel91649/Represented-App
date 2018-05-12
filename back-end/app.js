//REQUIREMENTS

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const port = 8000;

//PORT
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});