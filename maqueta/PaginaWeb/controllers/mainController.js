const mainController = {
    show: function (req, res) { 
        return res.render ('index', { title: 'Proyecto Integrador 2021'})
    }
}

module.exports = mainController