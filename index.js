class Musseum {
	cosntructor(name, addres, phoneNumber, schedule, id, email, cost) {
		this.name = name;
		this.addres = addres;
		this.phoneNumber = phoneNumber;
		this.schedule = schedule;
		this.id = id;
		this.email = email;
		this.cost = cost;
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