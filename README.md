# PROYECTO BEDU
Reservaciones para museos 

## Especificaciones del proyecto 馃搵
### Nombre del proyecto
Reservaciones para Museos.
### Objetivo principal
Desarrollar  una API que facilite a los museos el control de las personas que ingresan a sus instalaciones por medio de reservaciones, al mismo tiempo que permita a los visitantes reservar su recorrido dependiendo del horario y l铆mite de personas establecido por los museos.
### Tipos de usuario 
Personas que quieran reservar un recorrido en un museo y los museos que quieran tener un control sobre sus visitantes para no exceder el n煤mero de personas. Los cuales definimos como:
* Usuario Visitante
* Usuario Museo

### Historias de usuario: 
1. Como usuario visitante, quiero reservar un recorrido de museo
2. Como usuario visitante, quiero ver la lista de museos 
3. Como usuario visitante, quiero ver la informaci贸n de un museo
4. Como usuario visitante, quiero cancelar una reservaci贸n
5. Como usuario museo, quiero editar mi informaci贸n
6. Como usuario visitante, quiero ver la lista de reservaciones
7. Como usuario museo, quiero crear, editar, listar y eliminar un servicio
8. Como usuario museo, quiero tener un registro de las personas que ingresan a los recorridos. 
9. Como usuario museo, quiero definir el precio, l铆mite de visitantes y servicios que ofrezco. 

### Informaci贸n que necesitamos
Necesitaremos informaci贸n sobre:
* Los museos que se registran
* Los servicios que ofrece cada museo
* L铆mite de visitas por d铆a
* Precio de los recorridos

### Principales entidades
* Usuario visitante
* Usuario museo
* Servicios
* Tickets

### Caracteristicas de las entidades
* Usuario visitante : id, nombre completo, email, foto, contrase帽a, direcci贸n, tel茅fono, estado y fecha de registro y actualizaci贸n.
* Usuario museo: id, idMuseo, idServicio, precio, limite de visitantes, tiempo del servicio, estado, fecha de registro y actualizaci贸n. 
* Servicios: id, descripci贸n del servicio, estado, fecha de creaci贸n y actualizaci贸n.
* Tikecks: id, idUsuario, idMuseo, estado, fecha de creaci贸n y actualizaci贸n.  

### Funcionalidades de cada usuario

#### Usuarios
Hace referencia a los usuarios que desean realizar una reservaci贸n previa a alg煤n museo. Este apartado deriva de usuarios, contiene un status de tipo 1 ,sus acciones son:

* Registrar, visualizar, editar y eliminar perfil
* Consultar y eliminar perfil
* Crear, cancelar y editar reservaci贸n
* Visualizar museos
* Visualizar ticket de reservaci贸n

#### Museos
Hace referencia a los museos disponibles para realizar una reservaci贸n de servicio o recorrido. Este apartado deriva de usuarios, contiene un status de tipo 2, sus acciones son:
* Autenticaci贸n
* Editar datos de perfil
* Agregar, visualizar, editar y eliminar servicios
* Agregar, visualizar, editar y eliminar reservaciones


### Tablas y atributos:
#### Tablas
![](img/ShowTables.png)


#### Tabla users

* id
* fullname
* email
* photo
* password
* address
* phoneNumber
* status
* createdAt
* updateAt
* tel茅fono 

![](img/userTable.png)

#### Tabla services

* id
* description
* status
* createdAt
* updatedAt

![](img/servicesTable.png)

#### Tabla museumService

* id
* idMuseum 
* idService
* price
* limitVisitors
* timeService
* status
* createdAt
* updatedAt

![](img/museumServicesTable.png)


#### Tabla ticket

* id
* idVisitor
* idMuseumService
* status
* createdAt
* updatedAt

![](img/ticketTable.png)


## Construido con 馃洜锔?

### Tecnolog铆as utilizadas
* Nombre: Node.js
  Version: 10.19.0
* Nombre: Express
  Versi贸n: 6.14..4
* Nombre: MySQL
  Versi贸n: 8.0.23
  
### Dependencias utilizadas:
* bcryptjs 2.4.3
* body-parser 1.19.0
* cors 2.8.5
* dotenv 8.2.0
* express 4.17.1
* express-validator 6.10.0
* jsonwebtoken 8.5.1
* mongoose 5.11.18
* mysql2 2.2.5
* nodemon 2.0.7
* sequelize 6.5.0 

### Link Swagger:
https://app.swaggerhub.com/apis-docs/trabucoaluca/museum-reservation/0.2

### Link del video:
https://www.canva.com/design/DAEYzPwO6MA/oVUF4NFg9P5FeLCOdNGsNQ/watch?utm_content=DAEYzPwO6MA&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

## Integrantes
### Equipo 

N煤mero 20

- Jorge Ivan Gutierrez Ya帽ez
- Diana Yesenia Campos Tenorio
- Daniel Rodr铆guez L贸pez
- Anahi Camas Hern谩ndez 
- Damian Susano Martinez 
