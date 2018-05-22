//REQUIREMENTS

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require ('passport');

const users = require('./routes/users');
const reps = require('./routes/reps');

const app = express();
const port = 8000;



app.use(logger('dev'));  //only use logger in dev mode and not production

//PORT
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});