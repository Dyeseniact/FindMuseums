# PROYECTO BEDU
Reservaciones para museos 

## Preguntas 
### ¿Qué espero que haga el proyecto?
Por la pandemia de COVID-19 los museos deben admitir a un límite de personas por recorrido, es por esto que este proyecto se enfoca en facilitar 
a los museos el control de las personas que ingresan a sus instalaciones por medio de reservaciones, de este modo el visitante puede reservar su recorrido 
dependiendo del horario y límite de personas establecido por el museo. 
### ¿Qué tipo de usuario tendrá nuestro sistema?
Personas que quieran reservar un recorrido en un museo, y museos que quieran tener un control sobre sus visitantes para no exceder el número de personas.
Los definimos como Visitante y Museo.
### ¿Qué acciones puede realizar cada usuario?
#### Visitante
- Hacer reservación
- Editar reservación
- Cancelar reservación
- Ver información del museo (horarios y número de personas)
- Ver su ticket de reservación

#### Museo
- Hacer reservaciones
- Editar reservaciones
- Cancelar reservaciones
- Obtener reservaciones
- Obtener listado de visitantes
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
- Ver información del museo (horarios y número de personas)
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
```javascript
class Museum {
	cosntructor(name, address, phoneNumber, schedule, idMuseum, email) {
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.schedule = schedule;
		this.idMuseum = idMuseum;
		this.email = email;
		
	}

	makeReservation() {

	}

	editReservation() {

	}

	cancelReservation() {

	}

	viewReservation() {

	}

	viewVisitors() {

	}
	
}

class Visitor{
	constructor(name, idVisitor, status, email, password, address, phone, idService) {
		this.name = name;
		this.idVisitor = idVisitor;
		this.status = status;
		this.email = email;
		this.password = password;
		this.address = address;
		this.phone = phone;
		
	}

	makeReservation() {

	}

	editReservation() {

	}

	cancelReservation() {

	}

	viewReservation() {

	}

	viewMuseums() {

	}

}

class Service{
	constructor(idService, description,date, time, price, limitVisitors, ) {
		this.idService = idService;
		this.description = description;
		this.date = date;
		this.time = time;
		this.price = price;
		this.limitVisitors = limitVisitors;
		
	}

	createService() {

	}

	editService() {

	}

	deleteService() {

	}

	getService() {

	}

	

}

class Ticket{
	constructor(idTicket, idVisitor, idService, idMuseum, price, date, time) {
		this.idTicket = idTicket;
		this.idVisitor = idVisitor;
		this.idService = idService;
		this.idMuseum = idMuseum;
		this.price = price;
		this.date = date;
		this.time = time;
		
	}

	createTicket() {

	}

	editTicket() {

	}
	
	getTicket() {

	}

	deleteTicket() {

	}
}
```
## Integrantes
Equipo número 20

- Jorge Ivan Gutierrez Yañez
- Diana Yesenia Campos Tenorio
- Daniel Rodríguez López
- Anahi Camas Hernández 
- Damian Susano Martinez 
