var express = require('express');
var router = express.Router();
var registerInitialCheck=require('../middlewares/registerChecks')
var register= require("../controllers/register")
/* GET home page. */
router.get('/', function(req, res, next) {
  const sess= req.session;
  sess.username='chandana';
  res.render('index', { title: 'Express' });
});



router.post('/register',registerInitialCheck,register)
module.exports = router;
