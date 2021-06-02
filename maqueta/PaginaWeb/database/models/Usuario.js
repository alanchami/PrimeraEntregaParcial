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
    tableName: 'usuarios',
    timestamps: true,
    underscored: false,


}
const Usuario=sequelize.define(alias,cols,config);
return Usuario;

}