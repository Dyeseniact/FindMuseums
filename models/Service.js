class Service{
	constructor(idService, description,date, time, price, limitVisitors, status ) {
		this.idService = idService;
		this.description = description;
		this.date = date;
		this.time = time;
		this.price = price;
		this.limitVisitors = limitVisitors;
        this.status = status;
		
	}
}

module.exports = Service;