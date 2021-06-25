var express = require('express');
var router = express.Router();
const mainController = require ('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.show);
router.get('/new', mainController.new);



module.exports = router ;
