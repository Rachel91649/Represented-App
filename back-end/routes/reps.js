const express = require('express');
const router = express.Router();


//GET All Reps

router.get('/', function( req, res ) {
  res.send('reps index page');
});


module.exports = router;