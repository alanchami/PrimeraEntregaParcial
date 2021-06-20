var express = require('express');
var router = express.Router() ;
const productController = require ('../controllers/productController');

/* GET home page. */
router.get('/', productController.show);
router.get ('/product-add', productController.add)
router.get ('/search', productController.search)



module.exports = router ;
