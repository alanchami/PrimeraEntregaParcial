const db = require ('../database/models');
const registerController = {
    show: function (req, res) { 
        let id = req.params.id;
        db.User.findAll()
    .then (data=>{
        return res.render ('register', {User: data});
    })
    .catch(error => {
        console.log(error);
    })
   
}}

module.exports = registerController