//REQUIREMENTS

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const port = 8000;



app.use(logger('dev'));  //only use logger in dev mode and not production

//PORT
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});