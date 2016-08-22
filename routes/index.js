var express = require('express');
var router = express.Router();
var request = require('request');
var cmmonFetch = require('../util/cmmonFetch');




// router.param('id', /^\d+$/);
/* GET home page. */

// router.get('/*', function(req, res, next) {
//   req.user = req.params[0];
//   //匹配下一个符合规则的路由
//   next();
//   // res.render('index', { title: 'Express' });
// });
router.get('/start', function(req, res, next) {
  res.render('start');
});
router.get('/demo', function(req, res, next) {

    cmmonFetch.fetchURL('http://localhost/order/1');
});
router.get('/404', function(req, res, next) {
  res.render('404');
});
router.get('/mine', function(req, res, next) {
  res.render('mine');
});


module.exports = router;
