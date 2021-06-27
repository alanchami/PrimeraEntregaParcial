const db = require('../database/models');
const op = db.Sequelize.Op;
const perfilController = {
    show: function (req, res) { 
        db.Producto.findAll({
            where:[
                {usuarios_id:req.session.user.id}
            ],
            include: [{
                association:'usuario',
                association:'comentarios'
             }]
        })
        .then(data =>{
            //return res.send( data);
            return res.render ('profile', { title: 'Proyecto Integrador 2021', productos:data})

        })
        
    },


addPerfil: function (req, res) { 
        return res.render ('profile-edit', { title: 'Proyecto Integrador 2021'})
    }

}

module.exports = perfilController;