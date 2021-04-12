const perfilController = {
    show: function (req, res) { 
        return res.render ('profile', { title: 'Proyecto Integrador 2021'})
    },
addPerfil: function (req, res) { 
        return res.render ('profile-edit', { title: 'Proyecto Integrador 2021'})
    }
}

module.exports = perfilController