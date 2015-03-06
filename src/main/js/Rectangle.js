
class Rectangle {
	
	constructor( x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	getDimension() {
		return new Dimension(this.width, this.height);
	}

}