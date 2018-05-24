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
app.use(bodyParser.json());
app.user(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use(session({
  secret:  "\x02\xf3\xf7r\t\x9f\xee\xbbu\xb1\xe1\x90\xfe'\xab\xa6L6\xdd\x8d[\xccO\xfe",
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(_dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/reps', reps);



//PORT
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});