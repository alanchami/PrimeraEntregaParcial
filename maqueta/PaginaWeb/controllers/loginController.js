const loginController = {
    show: function (req, res) { 
        return res.render ('login', { title: 'Proyecto Integrador 2021'})
    }
}

module.exports = loginController