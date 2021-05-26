module.exports = function(sequelize,dataTypes){
    //definir un alias sequelize que va a identificar  internamente el archivo de modelo.
let alias = 'User';
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
    CreatedAT:{
        type:dataTypes.DATE,
    },
   updatedAT:{
        type:dataTypes.DATE,
    },
    deletedAT:{
        type:dataTypes.DATE,
    },
    
}
let config = {
    table: 'usuarios',
    timestamps: true,
    underscored: false,


}
const User=sequelize.define(alias,cols,config);
return User;

}