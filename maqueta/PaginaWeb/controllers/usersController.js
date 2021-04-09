const usersController = {
    show: function (req, res) { 
        return res.render ('profile', { title: 'Proyecto Integrador 2021'})
    }
}

module.exports = usersController