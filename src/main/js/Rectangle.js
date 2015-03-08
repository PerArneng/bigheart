
class Rectangle {

	/*mc:var x;*/
	/*mc:var y;*/
	/*mc:var width;*/
	/*mc:var height;*/
	
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