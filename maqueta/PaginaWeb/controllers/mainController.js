const db = require('../database/models');
const mainController = {
    show: function (req, res) {
        db.Producto.findAll()
        .then (data => {  
            return res.render ('index', { title: 'Proyecto Integrador 2021', relojes: data})
          
           })
           .catch(error => {
            console.log(error)
         });
    }
}

module.exports = mainController