const db = require('../database/models');
const op = db.Sequelize.Op;


const productController = {


    show: function (req, res) { 
       let id = req.params.id; //captura el ID del producto
       //este ID lo uso dentro del findByPk para buscar UN solo producto. 
       db.Producto.findByPk(id, { 
          include: [
               {association: "usuario" } ,
               {association: "comentarios" }
               //agrego la relacion del producto con el usuario
           ]
       })
       .then (data => { 
           //toda esta informacion queda almacenada en este "data"
          //return res.send(data);
          console.log(data.comentarios);
           return res.render ('product', { title: 'Proyecto Integrador 2021', producto : data }) 
         //renderizo la vista con la info que 
         //me trajo el findByPk, es decir trajo la info del producto y ahora tamnien la del usuario.
       })
       .catch(error =>{
           console.log(error);
       })
       
    },


    add: function (req, res) { 
        //control para el acceso
        if (req.session.user == undefined ) { 
            return res.redirect ('/register');
        } else { 
        return res.render ('product-add', { title: 'Proyecto Integrador 2021'})
    } } , 

    store: function (req, res) { 
      
       name = req.body.name
       descripcion = req.body.descripcion 
       created_at = req.body.created_at

       db.Producto.create({name:name, image:"24.jpg", usuarios_id:req.session.user.id,descripcion:descripcion, created_at:created_at})

       .then( data =>{
           
           console.log(data);
           return res.redirect("/miperfil");
       })
    } , 
    
    search: function (req,res){
        
        let info = req.query.search;
        db.Producto.findAll({
            where: [
                {name: {[op.like]: '%' + info + '%'}
            }],
            include:[
                {association:'usuario'}
            ]
        })
        .then( data =>{
        //eturn res.send(data);
            return res.render ('search-results', { title: 'Proyecto Integrador 2021', relojes : data})
          
        })
        .catch(error =>{
            console.log(error);
        })


    },
    comment: function (req, res) {
        let data = req.body;
        
            let comentario = {
               productos_id: data.productos_id,
                usuarios_id: req.session.usuarios.id,
                texto: data.description
            }
            //3)Guardar producto
            db.Comentario.create(comentario)
                .then(() => {
                 return res.send (comentario)
                    return res.redirect('/product/detail/' +req.body.idProduct);
                })
                .catch(error => {
                    console.log(error);
                })

        
        

  
    

}

}

module.exports = productController