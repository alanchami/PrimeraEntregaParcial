module.exports = function(sequelize,dataTypes){
    //definir un alias sequelize que va a identificar  internamente el archivo de modelo.
let alias = 'Usuario';
//describir la configuracion de las columnas de la tabla
let cols={
    id:{
        autoincrement:true,
        primaryKey:true,
        type:dataTypes.INTEGER,
    },
    name:{
        type:dataTypes.STRING,
    },
    email:{
        type:dataTypes.STRING,
    },
    nacimiento:{
        type:dataTypes.DATE,
    },
    password:{
        type:dataTypes.STRING,
    },
    telefono: { 
        type: dataTypes.INTEGER, 
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
    tableName: 'usuarios',
    timestamps: true,
    underscored: true,


}
const Usuario=sequelize.define(alias,cols,config);
return Usuario;

}