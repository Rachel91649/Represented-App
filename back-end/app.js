
// ============================================
// Requirements
// ============================================
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require ('passport');


const app = express();
const port = process.env.PORT || 3000;
//process.env.PORT is an option value we check for to make the app scaleable for deployment.


// ============================================
// MiddleWare
// ============================================
app.use(logger('dev')); //only use logger in dev mode and not production
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



const users = require('./routes/users');
const reps = require('./routes/reps');



//


 


// app.use(cookieParser());

// app.use(session({
//   secret:  "\x02\xf3\xf7r\t\x9f\xee\xbbu\xb1\xe1\x90\xfe'\xab\xa6L6\xdd\x8d[\xccO\xfe",
//   resave: false,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// app.use(passport.session());

//app.use(express.static(path.join(_dirname, 'public')));
//app.use('/', index);

// app.use('/reps', reps);

// app.use('/users', users);



//PORT
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});