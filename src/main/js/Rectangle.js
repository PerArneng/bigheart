
class Rectangle {
	
	constructor( x, y, width, height) { //mc:function initialize( x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	/*mc:function*/ getDimension() {
		return new Dimension(this.width, this.height);
	}

}