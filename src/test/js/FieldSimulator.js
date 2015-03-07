

class FieldSimulator {

	constructor(drawingContext2d, field, bounds) {
		this.drawingContext2d = drawingContext2d;
		this.bounds = bounds;
		this.dc = new Dc(drawingContext2d, bounds);
		this.field = field;
	}


	update() {
		this.field.compute("ge");
		this.field.onUpdate(this.dc);

		this.drawingContext2d.beginPath();
		this.drawingContext2d.lineWidth="1";
		this.drawingContext2d.strokeStyle="red";
		this.drawingContext2d.rect(this.bounds.x, this.bounds.y, 
								   this.bounds.width, this.bounds.height);
		this.drawingContext2d.stroke();

	}

}