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
        let info = req.query.search;
        db.Producto.findAll({
            where: [
                {name: {[op.like]: '%' + info + '%'}
            }]
        })
        .then( data =>{
            return res.render ('search-results', { title: 'Proyecto Integrador 2021', relojes : data})
          //return res.send(data);
        })
        .catch(error =>{
            console.log(error);
        })


    }

}

module.exports = productController