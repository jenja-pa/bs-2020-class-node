var express = require('express');
var router = express.Router();

const { getName, saveName } = require("../services/user.services");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource: ' + req.url);
});

const {isAutorized} = require("../middlewares/auth.middlewares");
/* POST users listing. */
router.post('/', isAutorized, function(req, res, next) {
  const result = saveName(req.body);
  if (result){
    res.send(`Your data (${getName(req.body)}) is saved. Result: ${result}`);
  }else{
    res.status(404).send("Some error");
  }
});

module.exports = router;
