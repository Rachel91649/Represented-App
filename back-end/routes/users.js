// ============================================
// Requirements
// ============================================
const db = require('../db/queries');
const express = require('express');
const router = express.Router();
//const { loginRequired } = require('..auth/helpers'); //require the loginRequired function from helpers.js in auth folder
//const passport = require('../auth/local'); //passport local strategy


/**
 * Requests I need to be able to make
 *  - Get all users
 *  - Create a user
 *  - Get one user //login required here
 *  - Update one user
 *  - Delete a user
 */


//GET All Reps

router.get('/', function( req, res ) {
  res.send('users index page');
});



module.exports = router;