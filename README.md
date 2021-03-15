# PROYECTO BEDU
Reservaciones para museos 

## Especificaciones del proyecto 📋
### Nombre del proyecto
Reservaciones para Museos.
### Objetivo principal
Desarrollar  una API que facilite a los museos el control de las personas que ingresan a sus instalaciones por medio de reservaciones, al mismo tiempo que permita a los visitantes reservar su recorrido dependiendo del horario y límite de personas establecido por los museos.
### Tipos de usuario
Personas que quieran reservar un recorrido en un museo y los museos que quieran tener un control sobre sus visitantes para no exceder el número de personas. Los cuales definimos como:
* Usuarios
* Museos

### Historias de usuario:
* Como usuario visitante, quiero reservar un recorrido de museo
* Como usuario visitante, quiero ver la lista de museos 
* Como usuario visitante, quiero ver la información de un museo
* Como usuario visitante, quiero cancelar una reservación
* Como usuario museo, quiero editar mi información
* Como usuario visitante, quiero ver la lista de reservaciones
* Como usuario museo, quiero crear, editar, listar y eliminar un servicio
* Como usuario museo, quiero tener un registro de las personas que ingresan a los recorridos. 
* Como usuario museo, quiero definir el precio, límite de visitantes y servicios que ofrezco. 


### Acciones de cada usuario
#### Usuarios
Hace referencia a los usuarios que desean realizar una reservación previa a algún museo. Este apartado deriva de usuarios, contiene un status de tipo 1 ,sus acciones son:
* Registrar, visualizar, editar y eliminar perfil
* Consultar y eliminar perfil
* Crear, cancelar y editar reservación
* Visualizar museos
* Visualizar ticket de reservación
#### Museos
Hace referencia a los museos disponibles para realizar una reservación de servicio o recorrido. Este apartado deriva de usuarios, contiene un status de tipo 2, sus acciones son:
* Autenticación
* Editar datos de perfil
* Agregar, visualizar, editar y eliminar servicios
* Agregar, visualizar, editar y eliminar reservaciones


### Tablas y atributos:
#### Tablas
![](img/ShowTables.png)

#### users
![](img/userTable.png)

#### services
![](img/servicesTable.png)

#### museumService
![](img/museumServicesTable.png)


#### tickets
![](img/ticketTable.png)


## Construido con 🛠️

### Tecnologías utilizadas
* Nombre: Node.js
  Version: 10.19.0
* Nombre: Express
  Versión: 6.14..4
* Nombre: MySQL
  Versión: 8.0.23
  
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


## Integrantes
### Equipo

Número 20

- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 
