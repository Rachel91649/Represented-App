const express = require('express');
const router = express.Router();


//GET Home Page

router.get('/', function( req, res ) {
  res.render('index', {
    title: "Rachel's The shit!"
  });
});


module.exports = router;