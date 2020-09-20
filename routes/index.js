var express = require('express');
const { route } = require('./users');
var router = express.Router();
const userController = require('../controllers')

/* GET home page. */
router.get('/', userController.basicAPI);
router.get('/test', userController.testAPI);
router.post('/post_test', userController.postTestAPI);

module.exports = router;
