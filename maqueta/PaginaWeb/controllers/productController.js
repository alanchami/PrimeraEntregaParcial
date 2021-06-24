const db = require('../database/models');
const op = db.Sequelize.Op;
const productController = {
    show: function (req, res) { 
       let id= req.params.id; //captura el ID del producto
       //este ID lo uso dentro del findByPk para buscar UN solo producto. 
       db.Producto.findByPk(id, { 
           include: [
               {association: "usuario" } //agrego la relacion del producto con el usuario
           ]
       })
       .then (data => { //toda esta informacion queda almacenada en este "data"
         return res.render ('product', { title: 'Proyecto Integrador 2021', product : data }) //renderizo la vista con la info que 
         //me trajo el findByPk, es decir trajo la info del producto y ahora tamnien la del usuario.
       })
       
    },

    add: function (req, res) { 
        return res.render ('product-add', { title: 'Proyecto Integrador 2021'})
    },
    search: function (req,res){
        let info = req.query.search;
        db.Producto.findAll({
            where: [
                {name: {[op.like]: '%' + info + '%'}
            }]
        })
        .then( data =>{
            //return res.send(data);
            return res.render ('search-results', { title: 'Proyecto Integrador 2021', relojes : data})
          
        })
        .catch(error =>{
            console.log(error);
        })


    }

}

module.exports = productController