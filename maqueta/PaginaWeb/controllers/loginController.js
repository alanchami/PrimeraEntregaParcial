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
let errors = {};
if(user == null){
    //creamos mensaje de error
errors.message = "El mail no existe"
    //pasar ese mensaje a la vista
res.locals.errors = errors
    //renderizar la vista
    res.render('login');
}

            //Paso la informacion obtenida y guardo ese usuario en session
           req.session.user = user;
           //si tildamos "recodar usuario" creamos la cookie"
         if (req.body.rememberme != undefined){
             res.cookie('userId',user.id),{
                 maxAge: 1000 * 60 * 5 }
             }
           return res.redirect ('/');
        })
        .catch( error => {console.log(error)})
    },
     logout:function(req,res){
         //destruir la sesion
         req.session.destroy();
         //destruir la cookie
      res.clearCookie('userId');
         //redireccionar a home
         return res.redirect('/')
     }
}

 module.exports = loginController;