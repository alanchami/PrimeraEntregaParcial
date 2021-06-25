const db = require('../database/models');
const mainController = {
    show: function (req, res) {
        db.Producto.findAll({
           
                //agrego la relacion del producto con el usuario
            
            order: [
                ['created_at', 'DESC']
               ],
               limit: 4,
    include:[
        {association:'usuario'}
    ]
    
            })
        .then (data => {  
            //return res.send (data)
            return res.render ('index', { title: 'Proyecto Integrador 2021', relojes: data})
           })
           .catch(error => {
            console.log(error)
         });
    },
    new: function(req,res){
        db.Producto.findAll({
     order: [
         ['created_at', 'DESC']
        ],
     limit: 4, 
        })
        .then(data =>{
return res.send(data);
        })
        .catch( error =>{
            console.log(error);
        })
    }
}

module.exports = mainController