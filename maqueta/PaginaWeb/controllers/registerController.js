const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.Usuario;

const registerController = {
    index: function(req, res){
        //Mostrar el formulario de registro
        return res.render('register', { title: 'Proyecto Integrador 2021'});
    },
    //metodo store lo uso para guardar la informacion en la base de datos
    store: function(req, res){ 
        //creo un usuario con la info de los formularios
        let user = {
        //estoy teniendo informacion en el objeto req, en la propiedad body viaja la info del formulario para llamarla en el controlador.  
           nombre : req.body.name,
           mail: req.body.email,
           nacimiento: req.body.nacimiento,
           contraseña: bcrypt.hashSync(req.body.password, 10), 
           celular: req.body.celular
       }
       //guardo el usuario registrado en la DB
       users.create(user)
       //redirecciona a la pagina login una vez ya registrado el usuario para que inicie sesion. 
       .then( user => {
        return res.redirect('/login')
       })

       .catch(error => {
           console.log(error)
        });

    }
    }

module.exports = registerController;