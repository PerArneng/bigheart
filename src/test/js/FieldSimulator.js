

class FieldSimulator {

	constructor(drawingContext2d, field) {
		this.dc = new Dc(drawingContext2d);
		this.field = field;
	}


	update() {
		this.field.compute("ge");
		this.field.onUpdate(this.dc);
	}

}