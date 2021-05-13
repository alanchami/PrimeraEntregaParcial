const db = require ('../database/models');
const registerController = {
    show: function (req, res) { 
        return res.render ('register', { title: 'Proyecto Integrador 2021'})
    }
}

module.exports = registerController