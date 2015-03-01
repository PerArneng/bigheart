

class FieldSimulator {

	constructor(canvas, field) {
		this.dc = canvas;
		this.field = field;
	}


	update() {
		this.field.compute("ge");
		this.field.draw(this.canvas);
	}

}