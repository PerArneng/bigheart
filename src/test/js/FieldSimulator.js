

class FieldSimulator {

	constructor(drawingContext2d, field, bounds) {
		this.drawingContext2d = drawingContext2d;
		this.bounds = bounds;
		this.dc = new Dc(drawingContext2d, bounds);
		this.field = field;
	}


	update() {

		this.drawingContext2d.fillStyle="lightgray";
		this.drawingContext2d.fillRect(0,0,
			this.drawingContext2d.canvas.width,
			this.drawingContext2d.canvas.height);

		var info = new Info();
		info.currentHeartRate = this.random();

		this.field.compute(info);
		this.field.onUpdate(this.dc);
	
		/*
		this.drawingContext2d.beginPath();
		this.drawingContext2d.lineWidth="1";
		this.drawingContext2d.strokeStyle="red";
		this.drawingContext2d.rect(this.bounds.x, this.bounds.y, 
								   this.bounds.width, this.bounds.height);
		this.drawingContext2d.stroke();
		*/

	}

	random() {

		var nr = "";
		for (var i=0;i<3;i++) {
			nr = nr + Math.floor((Math.random() * 9) + 1)
		}
		return parseInt(nr);
	}

}