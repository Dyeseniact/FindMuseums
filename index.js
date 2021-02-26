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