const db = require('../database/models');
const mainController = {
    show: function (req, res) {
        db.Producto.findAll()
        .then (relojes => {  
            return res.render ('index', { title: 'Proyecto Integrador 2021', relojes: relojes})
          
           })
           .catch(error => {
            console.log(error)
         });
    }
}

module.exports = mainController