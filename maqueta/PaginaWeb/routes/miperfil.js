var express = require('express');
var router = express.Router();
const perfilController = require ('../controllers/perfilController');

/* GET home page. */
router.get('/:id', perfilController.show);
router.get ('/profile-editar', perfilController.addPerfil)

module.exports = router ;