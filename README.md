# PROYECTO BEDU
Reservaciones para museos 

## Preguntas 
### ¿Qué espero que haga el proyecto?
Por la pandemia de COVID-19 los museos deben admitir a un limite de personas por recorrido, es por esto que este proyecto se enfoca en facilitar 
a los museos el control de las personas que ingresan a sus instalaciones por medio de reservaciones, de este modo el visitante puede reservar su recorrido 
dependiendo del horario y limite de personas establecido por el museo. 
### ¿Qué tipo de usuario tendrá nuestro sistema?
Personas que quieran reservar un recorrido en un museo, y museos que quieran tener un control sobre sus visitantes para no exceder el número de personas.
Los definimos como Visitante y Museo.
### ¿Qué acciones puede realizar cada usuario?
#### Visitante
- Hacer reservación
- Editar reservación
- Cancelar reservación
- Ver información del museo (horarios y numero de personas)
- Ver su ticket de reservación

#### Museo
- Hacer reservaciones
- Editar reservaciones
- Cancelar reservaciones
- Obtener reservaciones
- Obtener listado de viistantes
- Establecer límite de visitantes 
- Establecer horarios de recorridos

### ¿Qué información se necesita?
- Datos personales de los visitantes
- Datos de los museos
- Datos de los recorridos 

### ¿Cuáles son las principales entidades?
- Visitante
- Museo
- Servicio (como los recorridos)
- Ticket

### ¿Qué características tiene cada entidad?
#### Visitante
- ID
- Nombre completo
- Email
- Contraseña
- Dirección
- Teléfono
- Status
#### Museo
- ID
- Nombre
- Dirección
- Teléfono
- Horario
- Email

#### Servicio (como los recorridos)
- ID 
- Descripción
- Fecha
- Hora
- Precio

#### Ticket
- ID
- ID visitante
- ID servicio
- ID museo
- Precio del servicio
- Fecha del servicio 
- Hora del servicio

### ¿Qué funcionalidades tiene cada entidad?
#### Visitante
- Hacer reservación
- Editar reservación
- Cancelar reservación
- Ver información del museo (horarios y numero de personas)
- Ver su ticket de reservación

#### Museo
- Hacer reservaciones
- Editar reservaciones
- Cancelar reservaciones
- Obtener reservaciones
- Obtener listado de visistantes
- Establecer límite de visitantes 
- Establecer horarios de recorridos

#### Servicio
- Crear
- Editar
- Obtener
- Eliminar 

#### Ticket
- Crear
- Editar
- Obtener
- Eliminar 

## Clases de JavaScript

## Integrantes
Equipo numero 20

- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 
