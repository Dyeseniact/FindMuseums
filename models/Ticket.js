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
}
module.exports = Ticket;