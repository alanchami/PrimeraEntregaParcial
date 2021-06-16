const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;

const loginController = {
    show: function (req, res) { 
        return res.render ('login', { title: 'Proyecto Integrador 2021'})
    },
    login: function (req, res){
        // Busco al usuario que se quiere loguear (iniciar sesion).
        //uso findOne porque quiero encontrar UNO SOLO.
        db.Usuario.findOne({
            where: [{email: req.body.email}]
            //Quiero buscar el registro en donde el campo email de la base de datos coincida con el dato que recibiste en el formulario.
        })
        .then( user => {
            //Paso la informacion obtenida y guardo ese usuario en session
            //req.session.user = user ; 
            // return res.redirect ('/');
            return res.send (user)
        })
        .catch( error => {console.log(error)})
    }}

 module.exports = loginController;