var express = require('express');
var router = express.Router();

const { getName } = require("../services/user.services");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource: ' + req.url);
});

/* POST users listing. */

router.post('/', function(req, res, next) {
  const name = getName(req.body);
  if (name){
    res.send(`Your name is ${name}`);
  }else{
    res.status(404).send("Some error");
  }
});

module.exports = router;
