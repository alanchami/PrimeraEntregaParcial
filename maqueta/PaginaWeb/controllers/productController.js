const db = require('../database/models');
const op = db.Sequelize.Op;
const productController = {
    show: function (req, res) { 
       
        return res.render ('product', { title: 'Proyecto Integrador 2021'})
    },

    add: function (req, res) { 
        return res.render ('product-add', { title: 'Proyecto Integrador 2021'})
    },
    search: function (req,res){
        let infoABuscar = req.query.search;
        db.Producto.findAll({
            where: [
                {name: {[op.like]: '%' + infoABuscar + '%'}}
            ]
        })
        .then( relojes =>{
            return res.render ('index', { title: 'Proyecto Integrador 2021', relojes: relojes})
          // return res.send(data);
        })
        .catch(error =>{
            console.log(error);
        })


    }

}

module.exports = productController