var express = require('express');
var router = express.Router();
var fetchUrl = require("fetch").fetchUrl;

var UserResult = [];
/* GET users listing. */
router.get('/:username', function(req, res, next) {
  var username = req.params.username;
  console.log(router.loadAPI());
  router.loadUser(username,req, res, next);
  res.send('mine',UserResult);
});

//load User information from dataBase -->cookie ?username :-->  call JAVA API-->return information
router.loadUser = function (username,req, res, next){

  var username = req.params.username || username;
  router.verifyUser(username)
  //todo:load...
}

// verify User from dataBase
router.verifyUser = function (username){
  //todo://verify...

}
module.exports = router;
