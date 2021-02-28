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
}

module.exports = Visitor;