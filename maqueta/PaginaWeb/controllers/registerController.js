const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;
const users = db.Usuario;

const registerController = {
    
    index: function(req, res){
        if (req.session.user == undefined){
        //Mostrar el formulario de registro
        return res.render('register', { title: 'Proyecto Integrador 2021'});
    } else {
        return res.redirect ('/');
       }
    },
    //metodo store lo uso para guardar la informacion en la base de datos
    store: function(req, res){ 
        db.Usuario.findAll({
            })
        let errors = {}
        
        if(req.body.email == ""){
            errors.message = "el mail es obligatorio";
            res.locals.errors = errors;
            return res.redirect('/register')   
        } else if(req.body.password == ""){
            errors.message = "la contraseña es obligatoria";
            res.locals.errors = errors;
            return res.redirect ('/register');
        } else {
            users.findOne({
                where: [{email: req.body.email}]
            })
                .then(function(user){
                    
                    if(user != null){
                        errors.message ="el mail ya esta registrado, elija otro";
                        res.locals.errors = errors;
                        return res.render('register'); 
                    } else {
                           //creo un usuario con la info de los formularios
     
                           let user = {
         
                            //estoy teniendo informacion en el objeto req, en la propiedad body viaja la info del formulario para llamarla en el controlador.  
          
                            name : req.body.name,
          
                            email: req.body.email,
          
                            nacimiento: req.body.nacimiento,
          
                            password: bcrypt.hashSync(req.body.password, 10), 
          
                            telefono: req.body.telefono
          
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
                })
               
                .catch(error => {console.log(error);})

            }
    }

     

}
    

module.exports = registerController;




