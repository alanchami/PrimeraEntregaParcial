module.exports = function(sequelize,dataTypes){
    //definir un alias sequelize que va a identificar  internamente el archivo de modelo.
let alias = 'Producto';
//describir la configuracion de las columnas de la tabla
let cols={
    id:{
        autoincrement:true,
        primaryKey:true,
        type:dataTypes.INTEGER,
    },
    image: { type: dataTypes.STRING
    }, 
    name:{
        type:dataTypes.STRING,
    },
    descripcion:{
        type:dataTypes.STRING,
    },
    usuarios_id:{
        type:dataTypes.INTEGER,
    },
    created_at:{
        type:dataTypes.DATE,
        
    },
   updated_at:{
        type:dataTypes.DATE,
        
    },
    deleted_at:{
        type:dataTypes.DATE,
        
    },
    
}
let config = {
    tableName: 'productos',
    timestamps: true,
    underscored: true,


}
const Producto = sequelize.define(alias,cols,config);
return Producto;

}