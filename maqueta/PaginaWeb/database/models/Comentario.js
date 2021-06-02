module.exports = function(sequelize,dataTypes){
    //definir un alias sequelize que va a identificar  internamente el archivo de modelo.
let alias = 'Comentario';
//describir la configuracion de las columnas de la tabla
let cols={
    id:{
        autoincrement:true,
        primaryKey:true,
        type:dataTypes.INTEGER,
    },
    productosId: { 
        type: dataTypes.INTEGER
    }, 
    usuariosId:{
        type:dataTypes.INTEGER,
    },
    name: { 
        type: dataTypes.STRING
    }, 
    description:{
        type:dataTypes.STRING,
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
    tableName: 'comentarios',
    timestamps: true,
    underscored: false,


}
const Comentario = sequelize.define(alias,cols,config);
return Comentario;

}