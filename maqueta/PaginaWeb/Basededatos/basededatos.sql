-- Creamos base de datos
create schema primerParcial;
-- indicamos al motor que queremos usar esa base de datos
use primerParcial;
-- creamos tabla de usuarios
create table usuarios (
-- int es el tipo de dato; unsigned porque no tiene que tener signo; primary key auto_increment es un tipo de dato contrsaint
id INT unsigned PRIMARY KEY AUTO_INCREMENT,
name varchar (255) not null, 
-- varchar es la cantidad maxima de caracteres; not null es para que sea obligatorio, 
email varchar (255) not null,
nacimiento date not null, 
password varchar (255) not null, 
telefono int unsigned not null,
createdAT datetime,
updatedAT datetime,
deletedAT datetime
);
create table productos (
id INT unsigned PRIMARY KEY AUTO_INCREMENT,
-- imagenes no se pueden guardar, se guardan las rutas hacia las imagenes
image varchar (255) not null,
descripcion varchar (255) not null,
creacion date not null,
-- creo columna donde va a caer la clave foranea
usuariosId int unsigned not null,
-- 22 para poder guardar el movimiento que va teniendo el registro se utiliza: createdAT,upadatedAT,deletedAT
createdAT datetime,
updatedAT datetime,
deletedAT datetime,
-- creo la clave foranea diciendo que lo que va a ir al campo userId va a ser unicamente del renglon numero 7 
foreign key (usuariosId) references usuarios(id)
);

create table comentarios (
id INT unsigned PRIMARY KEY AUTO_INCREMENT,
productosId int unsigned not null, 
usuariosId int unsigned not null, 
name varchar (255) not null, 
creacion date not null,
description text,
createdAT datetime,
updatedAT datetime,
deletedAT datetime,

foreign key (productosId) references productos(id),
foreign key (usuariosId) references usuarios(id)
);

-- cargar datos en las tablas
insert into usuarios
-- values se utiliza para poner que por cada posicion tiene que cunplir cada una de las columnas que tenemos en la tabla de usuarios
-- ponemos default porque es el primary key
values (default, "Alan Chami", "achami@udesa.edu.ar" ,"2001-12-31", "Messi2010", "1168639015",default,default,default),
 (default, "Nicolas Mizrahi", "nmizrahi@udesa.edu.ar" ,"2001-09-06", "Manzana999", "1178890988",default,default,default),
 (default, "Martina Umanunzaga", "mumanun@udesa.edu.ar" ,"2000-12-01", "barbie99", "1199765432",default,default,default),
 (default, "Ale vivone", "avivone@udesa.edu.ar" ,"1983-12-09", "a.virtual.07", "1169679005",default,default,default),
 (default, "Macarena Armijo", "macaarmijo@udesa.edu.ar" ,"1996-03-25", "Maca5654", "1130573543",default,default,default);
 
 insert into productos
 values (default,"https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",1,default,default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default),
(default, "https://images-na.ssl-images-amazon.com/images/I/61SNNgYSS6L._AC_UX522_.jpg", "Reloj Swatch" ,"Reloj con mas de 30 años de antiguedad en excelente estado", "2021-12-12",default,default,default);

 insert into comentarios
 values (default, 1,1,"Martin Paredes ", "2020-12-7 " ,"Ha sido una de las mejores compras de mi vida. Buena atención y rápida entrega. Soy felíz.",default,default,default),
 (default,2,2, "Federico Djamus", "2020-04-22" ,"precio-calidad muy buena. Ponerse este reloj y salir a la calle es una sensación inexplicable. Muchas gracias!!",default,default,default),
 (default,3,3, "Matias Saal", "2021-02-09" ,"No me gustó. Te lo venden con la imagen como si fueses a comprar un Rolex Yacht-Master II y te terminas llevando un juguete.",default,default,default),
 (default,4,4, "Ilan Umansky", "2021-03-01" ,"Estoy fascinado con mi nuevo Swatch G4300. Una de las mejores inversiones de mi vida sin lugar a dudas. Me gustó todo, desde la presentación hasta la malla.",default,default,default),
 (default, 5,5,"Lucas Liwsky", "2021-09-05" ,"Producto 8 puntos. Hasta el momento, funciona de diez. La correa es de calidad media y el resto de primera.", default,default,default);