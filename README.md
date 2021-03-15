# PROYECTO BEDU
Reservaciones para museos 

## Especificaciones del proyecto 
### Nombre del proyecto
Reservaciones para Museos.
### Objetivo principal
Desarrollar  una API que facilite a los museos el control de las personas que ingresan a sus instalaciones por medio de reservaciones, al mismo tiempo que permita a los visitantes reservar su recorrido dependiendo del horario y límite de personas establecido por los museos.
### Tipos de usuario
Personas que quieran reservar un recorrido en un museo y los museos que quieran tener un control sobre sus visitantes para no exceder el número de personas. Los cuales definimos como:
* Usuarios
* Museos
#### Acciones de cada usuario
### Usuarios
Hace referencia a los usuarios que desean realizar una reservación previa a algún museo. Este apartado deriva de usuarios, contiene un status de tipo 1 ,sus acciones son:
* Registrar, visualizar, editar y eliminar perfil
* Consultar y eliminar perfil
* Crear, cancelar y editar reservación
* Visualizar museos
* Visualizar ticket de reservación
### Museos
Hace referencia a los museos disponibles para realizar una reservación de servicio o recorrido. Este apartado deriva de usuarios, contiene un status de tipo 2, sus acciones son:
* Autenticación
* Editar datos de perfil
* Agregar, visualizar, editar y eliminar servicios
* Agregar, visualizar, editar y eliminar reservaciones


### Tablas y atributos:
## users
* id
* fullname
* email
* foto
* password
* address
* phoneNumber
* status
* createdAt
* updateAt


```
## Integrantes
Equipo número 20

- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 
