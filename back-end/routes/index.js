const express = require('express');
const router = express.Router();


//GET Home Page

router.get('/', function( req, res ) {
  res.send('landing page');
});


module.exports = router;