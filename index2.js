class Museum {
	constructor(name, address, phoneNumber, schedule, idMuseum, email) {
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.schedule = schedule;
		this.idMuseum = idMuseum;
		this.email = email;
		
	}
	createMuseum() {
		 
	}

	getMuseums() {

	}

  	editMuseum() {

	}

  	deleteMuseum() {

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

	setSchedule() {

	}

	setLimitVisitors() {

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
		this.idService = idService;
		
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
