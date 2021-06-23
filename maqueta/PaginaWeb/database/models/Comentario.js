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
    productos_id: { 
        type: dataTypes.INTEGER
    }, 
    usuarios_id:{
        type:dataTypes.INTEGER,
    },
    name: { 
        type: dataTypes.STRING
    }, 
    description:{
        type:dataTypes.STRING,
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
    tableName: 'comentarios',
    timestamps: true,
    underscored: true,


}
const Comentario = sequelize.define(alias,cols,config);
Comentario.associate = function (modelos) { 
    Comentario.belongsTo(modelos.Usuario, { 
    as: "comentarios",
    foreignKey: "usuarios_id"
    })
    }
return Comentario;

}