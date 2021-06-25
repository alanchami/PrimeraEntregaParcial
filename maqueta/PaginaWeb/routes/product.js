var express = require('express');
var router = express.Router() ;
const productController = require ('../controllers/productController');

/* GET home page. */
router.get('/detail/:id', productController.show);
router.get ('/product-add', productController.add);
router.get ('/search', productController.search);
router.post ('/store', productController.store);
router.post ('/comentario', productController.comment);






module.exports = router ;
