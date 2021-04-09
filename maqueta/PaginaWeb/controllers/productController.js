const productController = {
    show: function (req, res) { 
        return res.render ('product', { title: 'Proyecto Integrador 2021'})
    },

    add: function (req, res) { 
        return res.render ('product-add', { title: 'Proyecto Integrador 2021'})
    }
}

module.exports = productController