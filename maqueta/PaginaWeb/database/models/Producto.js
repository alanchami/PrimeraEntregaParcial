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
    usuariosId:{
        type:dataTypes.INTEGER,
    },
    createdAt:{
        type:dataTypes.DATE,
        field: "createdAT"
    },
   updatedAt:{
        type:dataTypes.DATE,
        field: "updatedAT"
    },
    deletedAt:{
        type:dataTypes.DATE,
        field: "deletedAT"
    },
    
}
let config = {
    tableName: 'productos',
    timestamps: true,
    underscored: false,


}
const Producto = sequelize.define(alias,cols,config);
return Producto;

}